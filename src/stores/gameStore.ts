import { create } from 'zustand'
import {
  GameScene,
  GameState,
  Heroine,
  TrainingOption,
  GameEvent,
  EventChoice,
  Stats,
  Ending,
  GamePhase,
  StatKey,
  ConditionKey,
  SupportCard,
  STAT_MAX,
} from '../types/game'
import { events } from '../data/events'
import { endings } from '../data/endings'

const STORAGE_KEY = 'mesuiki-save'
const GALLERY_KEY = 'mesuiki-gallery'

function clampStat(value: number): number {
  return Math.max(0, Math.min(STAT_MAX, value))
}

function clampCondition(value: number): number {
  return Math.max(0, Math.min(100, value))
}

function randRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getPhase(turn: number): GamePhase {
  if (turn <= 12) return 'spring'
  if (turn <= 24) return 'summer'
  if (turn <= 36) return 'fall'
  return 'winter'
}

function loadSave(): Partial<GameState> | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch { /* ignore */ }
  return null
}

function saveToDisk(state: GameState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      scene: state.scene,
      turn: state.turn,
      maxTurns: state.maxTurns,
      stats: state.stats,
      condition: state.condition,
      heroine: state.heroine,
      supportCards: state.supportCards,
      supportStoryProgress: state.supportStoryProgress,
      triggeredEventIds: state.triggeredEventIds,
      log: state.log,
    }))
  } catch { /* ignore */ }
}

function clearSave() {
  try { localStorage.removeItem(STORAGE_KEY) } catch { /* ignore */ }
}

function unlockEnding(rank: string) {
  try {
    const raw = localStorage.getItem(GALLERY_KEY)
    const gallery: string[] = raw ? JSON.parse(raw) : []
    if (!gallery.includes(rank)) {
      gallery.push(rank)
      localStorage.setItem(GALLERY_KEY, JSON.stringify(gallery))
    }
  } catch { /* ignore */ }
}

const ZERO_STATS: Stats = { libido: 0, technique: 0, capacity: 0, endurance: 0, charm: 0 }

interface GameActions {
  startGame: () => void
  selectHeroine: (heroine: Heroine) => void
  selectSupportCards: (cards: SupportCard[]) => void
  selectTraining: (training: TrainingOption) => void
  advanceTurn: () => void
  makeChoice: (choice: EventChoice) => void
  dismissEvent: () => void
  endGame: () => void
  loadSavedGame: () => boolean
  resetGame: () => void
  getEnding: () => Ending
  getPhase: () => GamePhase
}

const initialState: GameState = {
  scene: GameScene.Title,
  turn: 0,
  maxTurns: 48,
  stats: { ...ZERO_STATS },
  condition: { stamina: 100, mental: 100 },
  heroine: null,
  supportCards: [],
  supportStoryProgress: {},
  currentEvent: null,
  triggeredEventIds: [],
  log: [],
}

export const useGameStore = create<GameState & GameActions>((set, get) => ({
  ...initialState,

  startGame: () => {
    set({ scene: GameScene.HeroineSelect })
  },

  selectHeroine: (heroine: Heroine) => {
    set({
      heroine,
      stats: { ...heroine.baseStats },
      condition: { ...heroine.baseCondition },
      turn: 0,
      triggeredEventIds: [],
      log: [],
      scene: GameScene.SupportSelect,
    })
  },

  selectSupportCards: (cards: SupportCard[]) => {
    const progress: Record<string, number> = {}
    for (const c of cards) {
      progress[c.id] = 0
    }
    set({
      supportCards: cards,
      supportStoryProgress: progress,
      turn: 1,
      scene: GameScene.Training,
    })
    // Check for turn-1 events
    setTimeout(() => get().advanceTurn(), 0)
  },

  selectTraining: (training: TrainingOption) => {
    const state = get()
    const newStats = { ...state.stats }
    const newCondition = { ...state.condition }

    // 연심(Libido)에 의한 훈련 효율 보너스: libido가 높을수록 효율 증가 (max +30% at 1250)
    const libidoBonus = 1 + (state.stats.libido / STAT_MAX) * 0.3

    // 서포트 카드 훈련 보너스 계산
    let supportBonusMap: Partial<Record<StatKey, number>> = {}
    for (const card of state.supportCards) {
      for (const bonus of card.trainingBonus) {
        supportBonusMap[bonus.stat] = (supportBonusMap[bonus.stat] ?? 0) + bonus.percent / 100
      }
    }

    // Apply stat effects with random variance + libido bonus + support bonus
    for (const effect of training.statEffects) {
      const base = randRange(effect.min, effect.max)
      const supportMult = 1 + (supportBonusMap[effect.stat] ?? 0)
      const gain = Math.round(base * libidoBonus * supportMult)
      newStats[effect.stat] = clampStat(newStats[effect.stat] + gain)
    }

    // 연심(Libido)에 의한 체력 소비 감소 (max -20% at 1250)
    const staminaReduction = 1 - (state.stats.libido / STAT_MAX) * 0.2

    // Apply condition effects
    for (const effect of training.conditionEffects) {
      let value = effect.value
      if (effect.condition === 'stamina' && value < 0) {
        value = Math.round(value * staminaReduction)
      }
      newCondition[effect.condition] = clampCondition(newCondition[effect.condition] + value)
    }

    const logEntry = `턴 ${state.turn}: ${training.name} 실행`

    set({
      stats: newStats,
      condition: newCondition,
      log: [...state.log, logEntry],
    })

    // Check if stamina/mental hit zero → force rest
    if (newCondition.stamina <= 0 || newCondition.mental <= 0) {
      set(s => ({
        log: [...s.log, '⚠️ 컨디션 한계! 강제 휴식 발동'],
        condition: {
          stamina: clampCondition(s.condition.stamina + 20),
          mental: clampCondition(s.condition.mental + 10),
        },
      }))
    }

    // 서포트 카드 스토리 이벤트 체크 (25% 확률로 트리거)
    const storyEvent = checkForSupportStory(get())
    if (storyEvent) {
      set({
        currentEvent: storyEvent,
        triggeredEventIds: [...get().triggeredEventIds, storyEvent.id],
        scene: GameScene.Event,
      })
      return
    }

    // Check for events, then advance turn
    const event = checkForEvent(get())
    if (event) {
      set({
        currentEvent: event,
        triggeredEventIds: [...get().triggeredEventIds, event.id],
        scene: GameScene.Event,
      })
    } else if (state.turn >= state.maxTurns) {
      get().endGame()
    } else {
      set({ turn: state.turn + 1 })
      saveToDisk(get())
    }
  },

  advanceTurn: () => {
    const state = get()
    const event = checkForEvent(state)
    if (event) {
      set({
        currentEvent: event,
        triggeredEventIds: [...state.triggeredEventIds, event.id],
        scene: GameScene.Event,
      })
    }
    saveToDisk(get())
  },

  makeChoice: (choice: EventChoice) => {
    const state = get()
    const newStats = { ...state.stats }
    const newCondition = { ...state.condition }

    for (const [key, value] of Object.entries(choice.statEffects)) {
      if (value) {
        newStats[key as StatKey] = clampStat(newStats[key as StatKey] + value)
      }
    }
    for (const [key, value] of Object.entries(choice.conditionEffects)) {
      if (value) {
        newCondition[key as ConditionKey] = clampCondition(newCondition[key as ConditionKey] + value)
      }
    }

    set({
      stats: newStats,
      condition: newCondition,
      log: [...state.log, `이벤트 「${state.currentEvent?.title}」 완료`],
    })
  },

  dismissEvent: () => {
    const state = get()

    // 서포트 카드 스토리 완료 시 진행도 업데이트
    if (state.currentEvent?.id.startsWith('support-story-')) {
      const parts = state.currentEvent.id.split('-')
      // support-story-{cardId}-step-{n}
      const cardId = parts.slice(2, -2).join('-')
      const step = parseInt(parts[parts.length - 1])
      const newProgress = { ...state.supportStoryProgress }
      newProgress[cardId] = step + 1

      // 최종 스토리 완료 시 보너스 적용
      const card = state.supportCards.find(c => c.id === cardId)
      if (card && step === 2) {
        const newStats = { ...state.stats }
        const bonusAmount = Math.round(newStats[card.finalBonusStat] * card.finalBonusPercent / 100)
        newStats[card.finalBonusStat] = clampStat(newStats[card.finalBonusStat] + bonusAmount)
        set({
          supportStoryProgress: newProgress,
          stats: newStats,
          log: [...state.log, `🌟 ${card.characterName} 서포트 스토리 완결! ${card.finalBonusStat} +${card.finalBonusPercent}% 보너스!`],
        })
      } else {
        set({ supportStoryProgress: newProgress })
      }
    }

    const updatedState = get()
    if (updatedState.turn >= updatedState.maxTurns) {
      get().endGame()
    } else {
      set({
        currentEvent: null,
        scene: GameScene.Training,
        turn: updatedState.turn + 1,
      })
      saveToDisk(get())
    }
  },

  endGame: () => {
    const ending = get().getEnding()
    unlockEnding(ending.rank)
    clearSave()
    set({ scene: GameScene.Result, currentEvent: null })
  },

  getEnding: () => {
    const { stats, condition } = get()
    return endings.find(e => e.condition(stats, condition)) ?? endings[endings.length - 1]
  },

  getPhase: () => getPhase(get().turn),

  loadSavedGame: () => {
    const saved = loadSave()
    if (saved && saved.heroine && saved.scene !== GameScene.Title) {
      set({ ...initialState, ...saved } as GameState)
      return true
    }
    return false
  },

  resetGame: () => {
    clearSave()
    set({ ...initialState })
  },
}))

function checkForEvent(state: GameState): GameEvent | null {
  const phase = getPhase(state.turn)

  for (const event of events) {
    if (state.triggeredEventIds.includes(event.id)) continue

    // 히로인 전용 이벤트 필터링
    if (event.heroineId && event.heroineId !== state.heroine?.id) continue

    const trigger = event.trigger
    if (trigger.type === 'turn' && trigger.turn === state.turn) {
      return event
    }
    if (trigger.type === 'stat') {
      const val = state.stats[trigger.stat]
      if (trigger.direction === 'above' && val >= trigger.threshold) return event
      if (trigger.direction === 'below' && val <= trigger.threshold) return event
    }
    if (trigger.type === 'phase' && trigger.phase === phase) {
      return event
    }
  }
  return null
}

function checkForSupportStory(state: GameState): GameEvent | null {
  // 5턴마다 한 번씩 서포트 스토리 체크 (5, 10, 15, 20, 25, 30, 35, 40)
  if (state.turn % 5 !== 0) return null

  // 아직 완료되지 않은 서포트 카드 스토리 찾기
  const eligibleCards = state.supportCards.filter(card => {
    const progress = state.supportStoryProgress[card.id] ?? 0
    return progress < 3
  })

  if (eligibleCards.length === 0) return null

  // 랜덤으로 하나 선택
  const card = eligibleCards[Math.floor(Math.random() * eligibleCards.length)]
  const step = state.supportStoryProgress[card.id] ?? 0
  const story = card.story[step]

  return {
    id: `support-story-${card.id}-step-${step}`,
    title: `[${card.characterName}] ${story.title}`,
    script: story.script,
    trigger: { type: 'turn' as const, turn: state.turn },
    choices: story.choices,
  }
}
