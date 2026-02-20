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
  TrainingResult,
  ConditionStatus,
  StellaArchive,
  Condition,
  BattleState,
  BattleActionCard,
} from '../types/game'
import { events } from '../data/events'
import { eventsReona } from '../data/events_reona'
import { endings } from '../data/endings'
import { seasonRivals, drawCards, getAutoNarration, getRandomRival } from '../data/battleData'
import { getLustEvent } from '../data/lustEvents'
import { skills, getSkillById } from '../data/skills'
import { Skill } from '../types/skill'

const STORAGE_KEY = 'mesuiki-save'
const GALLERY_KEY = 'mesuiki-gallery'
const ARCHIVE_KEY = 'mesuiki-archives'

function clampStat(value: number): number {
  return Math.max(0, Math.min(STAT_MAX, value))
}

function clampCondition(value: number): number {
  return Math.max(0, Math.min(100, value))
}

function clampLust(value: number): number {
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

// ── Condition Status 계산 ──
export function computeConditionStatus(
  stamina: number,
  mental: number,
  lust: number,
  trainPhobiaTurns: number,
): ConditionStatus {
  if (trainPhobiaTurns > 0) return 'trainPhobia'
  if (stamina <= 25 || mental <= 25) return 'frigid'
  if (stamina >= 80 && mental >= 80 && lust >= 40 && lust <= 70) return 'inHeat'
  return 'normal'
}

// ── Training Result 판정 ──
function determineTrainingResult(
  stamina: number,
  mental: number,
  lust: number,
  conditionStatus: ConditionStatus,
): TrainingResult {
  let excellentChance = 15
  let failChance = 20
  let catastropheChance = 5

  // stamina/mental 보정
  if (stamina >= 70) excellentChance += 5
  if (mental >= 70) excellentChance += 5

  // LP 적정존 보정
  if (lust >= 30 && lust <= 70) excellentChance += 10

  // 저체력 시 실패 확률 증가
  if (stamina <= 30) failChance += 15
  if (mental <= 30) failChance += 10

  // 극저 stamina/mental 시 대실패 확률 증가
  if (stamina <= 20) catastropheChance += 10
  if (mental <= 20) catastropheChance += 10

  // 절호조 보정
  if (conditionStatus === 'inHeat') {
    excellentChance += 10
    failChance = Math.max(5, failChance - 10)
  }

  // 최악 보정
  if (conditionStatus === 'frigid') {
    excellentChance = Math.max(0, excellentChance - 10)
    failChance += 10
  }

  const roll = Math.random() * 100
  if (roll < catastropheChance) return 'catastrophe'
  if (roll < catastropheChance + failChance) return 'fail'
  if (roll < catastropheChance + failChance + excellentChance) return 'excellent'
  return 'success'
}

// ── LP 효율 보정 ──
function getLustEfficiencyMult(lust: number): number {
  if (lust >= 30 && lust <= 70) return 1.1    // 적정: +10%
  if (lust > 80) return 0.8                    // 과열: -20%
  if (lust < 20) return 0.9                    // 저조: -10%
  return 1.0
}

// ── 컨디션 효율 보정 ──
function getConditionEfficiencyMult(status: ConditionStatus): number {
  if (status === 'inHeat') return 1.2   // 절호조: +20%
  if (status === 'frigid') return 0.7   // 최악: -30%
  return 1.0
}

// ── Save / Load ──
function loadSave(): Partial<GameState> | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const data = JSON.parse(raw)
      // Migration: add new fields if missing
      if (data.lust === undefined) data.lust = 30
      if (data.conditionStatus === undefined) data.conditionStatus = 'normal'
      if (data.trainPhobiaTurns === undefined) data.trainPhobiaTurns = 0
      if (data.lastTrainingResult === undefined) data.lastTrainingResult = null
      if (data.showTrainingResult === undefined) data.showTrainingResult = false
      if (data.inheritanceArchives === undefined) data.inheritanceArchives = []
      if (data.usedInheritance === undefined) data.usedInheritance = false
      if (data.bondGauges === undefined) data.bondGauges = {}
      if (data.supportCardPlacements === undefined) data.supportCardPlacements = {}
      if (data.fanCount === undefined) data.fanCount = 0
      if (data.battleState === undefined) data.battleState = null
      if (data.lustEventPending === undefined) data.lustEventPending = false
      if (data.skillPoints === undefined) data.skillPoints = 0
      if (data.skillHints === undefined) data.skillHints = {}
      if (data.learnedSkills === undefined) data.learnedSkills = []
      if (data.equippedSkills === undefined) data.equippedSkills = []
      if (data.showSkillShop === undefined) data.showSkillShop = false
      return data
    }
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
      lust: state.lust,
      conditionStatus: state.conditionStatus,
      trainPhobiaTurns: state.trainPhobiaTurns,
      heroine: state.heroine,
      supportCards: state.supportCards,
      supportStoryProgress: state.supportStoryProgress,
      triggeredEventIds: state.triggeredEventIds,
      log: state.log,
      inheritanceArchives: state.inheritanceArchives,
      usedInheritance: state.usedInheritance,
      fanCount: state.fanCount,
      bondGauges: state.bondGauges,
      supportCardPlacements: state.supportCardPlacements,
      battleState: state.battleState,
      skillPoints: state.skillPoints,
      skillHints: state.skillHints,
      learnedSkills: state.learnedSkills,
      equippedSkills: state.equippedSkills,
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

// ── Stella Archive (인자 계승) ──
export function loadArchives(): StellaArchive[] {
  try {
    const raw = localStorage.getItem(ARCHIVE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch { return [] }
}

function saveArchive(archive: StellaArchive) {
  try {
    const archives = loadArchives()
    archives.push(archive)
    localStorage.setItem(ARCHIVE_KEY, JSON.stringify(archives))
  } catch { /* ignore */ }
}

// ── 서포트 카드 배치 ──
const ALL_STATS: StatKey[] = ['libido', 'technique', 'capacity', 'endurance', 'charm']

function rollSupportPlacements(cards: SupportCard[]): Record<string, StatKey> {
  const placements: Record<string, StatKey> = {}
  for (const card of cards) {
    const roll = Math.random() * 100
    if (roll < 60) {
      placements[card.id] = card.attribute
    } else {
      const others = ALL_STATS.filter(s => s !== card.attribute)
      placements[card.id] = others[Math.floor(Math.random() * others.length)]
    }
  }
  return placements
}

// ── 훈련 확률 계산 (export) ──
export function getTrainingProbabilities(
  stamina: number,
  mental: number,
  lust: number,
  conditionStatus: ConditionStatus,
): { excellent: number; success: number; fail: number; catastrophe: number } {
  let excellentChance = 15
  let failChance = 20
  let catastropheChance = 5

  if (stamina >= 70) excellentChance += 5
  if (mental >= 70) excellentChance += 5
  if (lust >= 30 && lust <= 70) excellentChance += 10
  if (stamina <= 30) failChance += 15
  if (mental <= 30) failChance += 10
  if (stamina <= 20) catastropheChance += 10
  if (mental <= 20) catastropheChance += 10

  if (conditionStatus === 'inHeat') {
    excellentChance += 10
    failChance = Math.max(5, failChance - 10)
  }
  if (conditionStatus === 'frigid') {
    excellentChance = Math.max(0, excellentChance - 10)
    failChance += 10
  }

  const total = catastropheChance + failChance + excellentChance
  const successChance = Math.max(0, 100 - total)

  return {
    excellent: excellentChance,
    success: successChance,
    fail: failChance,
    catastrophe: catastropheChance,
  }
}

const ZERO_STATS: Stats = { libido: 0, technique: 0, capacity: 0, endurance: 0, charm: 0 }

interface GameActions {
  startGame: () => void
  selectHeroine: (heroine: Heroine) => void
  selectInheritance: (archives: StellaArchive[]) => void
  selectSupportCards: (cards: SupportCard[]) => void
  selectTraining: (training: TrainingOption) => void
  dismissTrainingResult: () => void
  advanceTurn: () => void
  makeChoice: (choice: EventChoice) => void
  dismissEvent: () => void
  endGame: () => void
  loadSavedGame: () => boolean
  resetGame: () => void
  getEnding: () => Ending
  getPhase: () => GamePhase
  startBattle: () => void
  startFreeBattle: () => void
  advanceBattleTurn: () => void
  selectBattleAction: (card: BattleActionCard) => void
  finishBattle: () => void
  openSkillShop: () => void
  closeSkillShop: () => void
  learnSkill: (skillId: string) => void
  equipSkill: (skillId: string) => void
  unequipSkill: (skillId: string) => void
}

const initialState: GameState = {
  scene: GameScene.Title,
  turn: 0,
  maxTurns: 48,
  stats: { ...ZERO_STATS },
  condition: { stamina: 100, mental: 100 },
  lust: 30,
  conditionStatus: 'normal',
  trainPhobiaTurns: 0,
  heroine: null,
  supportCards: [],
  supportStoryProgress: {},
  currentEvent: null,
  triggeredEventIds: [],
  log: [],
  lastTrainingResult: null,
  showTrainingResult: false,
  inheritanceArchives: [],
  usedInheritance: false,
  fanCount: 0,
  bondGauges: {},
  supportCardPlacements: {},
  battleState: null,
  lustEventPending: false,
  skillPoints: 0,
  skillHints: {},
  learnedSkills: [],
  equippedSkills: [],
  showSkillShop: false,
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
      lust: 30,
      conditionStatus: 'normal',
      trainPhobiaTurns: 0,
      turn: 0,
      triggeredEventIds: [],
      log: [],
      lastTrainingResult: null,
      showTrainingResult: false,
      inheritanceArchives: [],
      usedInheritance: false,
      fanCount: 0,
      bondGauges: {},
      supportCardPlacements: {},
      lustEventPending: false,
      skillPoints: 0,
      skillHints: {},
      learnedSkills: [],
      equippedSkills: [],
      showSkillShop: false,
      scene: GameScene.InheritanceSelect,
    })
  },

  selectInheritance: (archives: StellaArchive[]) => {
    const state = get()
    const newStats = { ...state.stats }

    // 선택한 아카이브의 bonusStat에 10% 보너스 적용
    for (const archive of archives) {
      const bonus = Math.round(newStats[archive.bonusStat] * archive.bonusPercent / 100)
      newStats[archive.bonusStat] = clampStat(newStats[archive.bonusStat] + Math.max(bonus, 10))
    }

    set({
      stats: newStats,
      inheritanceArchives: archives,
      usedInheritance: archives.length > 0,
      scene: GameScene.SupportSelect,
    })
  },

  selectSupportCards: (cards: SupportCard[]) => {
    const progress: Record<string, number> = {}
    const bondGauges: Record<string, number> = {}
    for (const c of cards) {
      progress[c.id] = 0
      bondGauges[c.id] = 0
    }
    set({
      supportCards: cards,
      supportStoryProgress: progress,
      bondGauges,
      supportCardPlacements: rollSupportPlacements(cards),
      turn: 1,
      scene: GameScene.Training,
    })
    // Check for turn-1 events
    setTimeout(() => get().advanceTurn(), 0)
  },

  selectTraining: (training: TrainingOption) => {
    const state = get()

    // 훈련 공포증 체크: 휴식만 가능
    if (state.conditionStatus === 'trainPhobia' && training.id !== 'rest') {
      return
    }

    const isRest = training.id === 'rest'
    const newStats = { ...state.stats }
    const newCondition = { ...state.condition }
    const statChanges: Partial<Stats> = {}
    const conditionChanges: Partial<Condition> = {}

    // LP 변동
    let newLust = state.lust
    if (isRest) {
      newLust = clampLust(newLust - 20)
    } else {
      newLust = clampLust(newLust + randRange(5, 15))
    }

    // LP >= 90 자위 이벤트 강제
    let lustEventTriggered = false
    if (newLust >= 90 && !isRest) {
      lustEventTriggered = true
      newLust = 50
    }

    // 컨디션 상태 업데이트
    const newConditionStatus = computeConditionStatus(
      state.condition.stamina,
      state.condition.mental,
      newLust,
      state.trainPhobiaTurns,
    )

    // 훈련 결과 판정 (휴식은 항상 성공)
    const trainingResult: TrainingResult = isRest
      ? 'success'
      : determineTrainingResult(state.condition.stamina, state.condition.mental, newLust, newConditionStatus)

    // 결과에 따른 스탯 배율
    let statMultiplier = 1.0
    let mentalPenalty = 0
    let statPenalty = 0
    let newTrainPhobiaTurns = Math.max(0, state.trainPhobiaTurns - 1)

    switch (trainingResult) {
      case 'excellent':
        statMultiplier = 1.5
        conditionChanges.stamina = 10 // 체력 보너스
        break
      case 'success':
        statMultiplier = 1.0
        break
      case 'fail':
        statMultiplier = 0
        mentalPenalty = -10
        break
      case 'catastrophe':
        statMultiplier = 0
        statPenalty = randRange(-100, -50)
        newTrainPhobiaTurns = 2
        break
    }

    // 연심(Libido)에 의한 훈련 효율 보너스
    const libidoBonus = 1 + (state.stats.libido / STAT_MAX) * 0.3

    // LP 효율 보정
    const lustMult = getLustEfficiencyMult(newLust)

    // 컨디션 효율 보정
    const condMult = getConditionEfficiencyMult(newConditionStatus)

    // 서포트 카드 훈련 보너스 계산
    const supportBonusMap: Partial<Record<StatKey, number>> = {}
    for (const card of state.supportCards) {
      for (const bonus of card.trainingBonus) {
        supportBonusMap[bonus.stat] = (supportBonusMap[bonus.stat] ?? 0) + bonus.percent / 100
      }
    }

    // ── 인연 게이지(타락 심도) 처리 ──
    const primaryStat = training.statEffects.length > 0 ? training.statEffects[0].stat : null
    const newBondGauges = { ...state.bondGauges }
    const bondChanges: Record<string, number> = {}

    if (!isRest && primaryStat) {
      for (const card of state.supportCards) {
        if (state.supportCardPlacements[card.id] !== primaryStat) continue
        const gain = randRange(8, 15)
        const prev = newBondGauges[card.id] ?? 0
        newBondGauges[card.id] = Math.min(100, prev + gain)
        bondChanges[card.id] = newBondGauges[card.id] - prev
      }
    }

    // ── 인연 게이지 레벨별 보너스 ──
    // Green(20-60): 이벤트 확률 +10% (TODO: event system)
    // Orange(60-80): 훈련 보너스 +15%
    let bondTrainingBonus = 1.0
    if (primaryStat) {
      for (const card of state.supportCards) {
        if (state.supportCardPlacements[card.id] !== primaryStat) continue
        const bond = newBondGauges[card.id] ?? 0
        if (bond >= 60 && bond < 80) {
          bondTrainingBonus += 0.15
          break // 하나만 적용
        }
      }
    }

    // ── 우정 트레이닝 체크 ──
    let friendshipBonus = false
    let friendshipMult = 1.0
    let friendshipExtraStat = 0
    if (!isRest && primaryStat) {
      const friendshipCards = state.supportCards.filter(
        card => (newBondGauges[card.id] ?? 0) >= 80 && state.supportCardPlacements[card.id] === primaryStat
      )
      if (friendshipCards.length > 0) {
        friendshipBonus = true
        friendshipMult = 1.5
        friendshipExtraStat = randRange(30, 60)
        // 하렘 스택: 2개+ 시 추가 x0.3
        if (friendshipCards.length >= 2) {
          friendshipMult += 0.3 * (friendshipCards.length - 1)
        }
      }
    }

    // Apply stat effects
    if (statMultiplier > 0) {
      for (const effect of training.statEffects) {
        const base = randRange(effect.min, effect.max)
        const supportMult = 1 + (supportBonusMap[effect.stat] ?? 0)
        const gain = Math.round(base * libidoBonus * supportMult * lustMult * condMult * statMultiplier * bondTrainingBonus * friendshipMult)
        statChanges[effect.stat] = gain
        newStats[effect.stat] = clampStat(newStats[effect.stat] + gain)
      }
      // 우정 트레이닝 추가 스탯
      if (friendshipBonus && primaryStat) {
        statChanges[primaryStat] = (statChanges[primaryStat] ?? 0) + friendshipExtraStat
        newStats[primaryStat] = clampStat(newStats[primaryStat] + friendshipExtraStat)
      }
    }

    // 대실패 시 스탯 감소
    if (trainingResult === 'catastrophe') {
      // 훈련 주 스탯에서 감소
      for (const effect of training.statEffects) {
        const loss = statPenalty
        statChanges[effect.stat] = loss
        newStats[effect.stat] = clampStat(newStats[effect.stat] + loss)
        break // 첫 번째 스탯만
      }
    }

    // 연심(Libido)에 의한 체력 소비 감소
    const staminaReduction = 1 - (state.stats.libido / STAT_MAX) * 0.2

    // Apply condition effects
    for (const effect of training.conditionEffects) {
      let value = effect.value
      if (effect.condition === 'stamina' && value < 0) {
        value = Math.round(value * staminaReduction)
      }
      conditionChanges[effect.condition] = (conditionChanges[effect.condition] ?? 0) + value
      newCondition[effect.condition] = clampCondition(newCondition[effect.condition] + value)
    }

    // 실패 시 정신력 추가 감소
    if (mentalPenalty !== 0) {
      conditionChanges.mental = (conditionChanges.mental ?? 0) + mentalPenalty
      newCondition.mental = clampCondition(newCondition.mental + mentalPenalty)
    }

    // 대성공 체력 보너스 적용
    if (trainingResult === 'excellent') {
      newCondition.stamina = clampCondition(newCondition.stamina + 10)
    }

    const resultLabel = {
      excellent: '대성공!',
      success: '성공',
      fail: '실패',
      catastrophe: '대실패!',
    }[trainingResult]

    const logEntry = `턴 ${state.turn}: ${training.name} — ${resultLabel}`
    const logEntries = [logEntry]

    if (lustEventTriggered) {
      logEntries.push('💦 성욕 폭주! 자위 이벤트 발동 — LP 50으로 리셋')
    }

    const updatedConditionStatus = computeConditionStatus(
      newCondition.stamina,
      newCondition.mental,
      newLust,
      newTrainPhobiaTurns,
    )

    if (friendshipBonus) {
      logEntries.push('💕 우정 트레이닝 발동!')
    }

    // ── SP 획득 ──
    let spGain = 0
    if (trainingResult === 'excellent') spGain = 3
    else if (trainingResult === 'success') spGain = 1
    const newSkillPoints = state.skillPoints + spGain
    if (spGain > 0) {
      logEntries.push(`🎯 SP +${spGain} (합계: ${newSkillPoints})`)
    }

    // ── 힌트 드랍 ──
    const newSkillHints = { ...state.skillHints }

    // 서포트 카드 힌트: 배치된 카드와 함께 훈련 시 15% 확률
    if (!isRest && primaryStat) {
      for (const card of state.supportCards) {
        if (state.supportCardPlacements[card.id] !== primaryStat) continue
        if (Math.random() < 0.15) {
          const cardSkills = skills.filter(s => s.hintSource === card.id)
          for (const sk of cardSkills) {
            const current = newSkillHints[sk.id] ?? 0
            if (current < 5) {
              newSkillHints[sk.id] = current + 1
              logEntries.push(`💡 [${card.characterName}] 스킬 힌트 획득: ${sk.name} Lv${current + 1}`)
            }
          }
        }
      }
    }

    // 히로인 고유 스킬 힌트: 대성공 시 10% 확률
    if (trainingResult === 'excellent' && state.heroine && Math.random() < 0.10) {
      const heroineSkills = skills.filter(s => s.hintSource === state.heroine!.id)
      if (heroineSkills.length > 0) {
        const sk = heroineSkills[Math.floor(Math.random() * heroineSkills.length)]
        const current = newSkillHints[sk.id] ?? 0
        if (current < 5) {
          newSkillHints[sk.id] = current + 1
          logEntries.push(`💡 [${state.heroine.name}] 고유 스킬 힌트: ${sk.name} Lv${current + 1}`)
        }
      }
    }

    // 범용 스킬 힌트: 훈련 시 5% 확률
    if (!isRest && Math.random() < 0.05) {
      const genericSkills = skills.filter(s => s.hintSource === 'generic')
      if (genericSkills.length > 0) {
        const sk = genericSkills[Math.floor(Math.random() * genericSkills.length)]
        const current = newSkillHints[sk.id] ?? 0
        if (current < 5) {
          newSkillHints[sk.id] = current + 1
          logEntries.push(`💡 범용 스킬 힌트: ${sk.name} Lv${current + 1}`)
        }
      }
    }

    set({
      stats: newStats,
      condition: newCondition,
      lust: newLust,
      conditionStatus: updatedConditionStatus,
      trainPhobiaTurns: newTrainPhobiaTurns,
      bondGauges: newBondGauges,
      skillPoints: newSkillPoints,
      skillHints: newSkillHints,
      log: [...state.log, ...logEntries],
      lastTrainingResult: {
        result: trainingResult,
        statChanges,
        conditionChanges,
        trainingName: training.name,
        trainingId: training.id,
        friendshipBonus,
        bondChanges,
        successText: training.successText,
        failText: training.failText,
      },
      showTrainingResult: true,
      lustEventPending: lustEventTriggered,
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
  },

  dismissTrainingResult: () => {
    const state = get()
    set({ showTrainingResult: false })

    // LP 폭주 이벤트 체크
    if (state.lustEventPending) {
      const lustEvent = getLustEvent(state.heroine?.id)
      set({
        lustEventPending: false,
        currentEvent: lustEvent,
        scene: GameScene.Event,
      })
      return
    }

    // 서포트 카드 스토리 이벤트 체크
    const storyEvent = checkForSupportStory(state)
    if (storyEvent) {
      set({
        currentEvent: storyEvent,
        triggeredEventIds: [...state.triggeredEventIds, storyEvent.id],
        scene: GameScene.Event,
      })
      return
    }

    // Check for events, then advance turn
    const event = checkForEvent(state)
    if (event) {
      set({
        currentEvent: event,
        triggeredEventIds: [...state.triggeredEventIds, event.id],
        scene: GameScene.Event,
      })
    } else if (state.turn >= state.maxTurns) {
      get().endGame()
    } else {
      // 시즌 종료 배틀 체크 (턴 12, 24, 36)
      if (state.turn === 12 || state.turn === 24 || state.turn === 36) {
        set({ turn: state.turn + 1 })
        get().startBattle()
        return
      }
      set({
        turn: state.turn + 1,
        supportCardPlacements: rollSupportPlacements(state.supportCards),
      })
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

    // LP 폭주 이벤트 선택지에 따른 LP 리셋
    const isLustEvent = state.currentEvent?.id.startsWith('lust-burst-')
    let newLust = state.lust
    if (isLustEvent) {
      const choiceIdx = state.currentEvent?.choices.indexOf(choice) ?? -1
      if (choiceIdx === 0) newLust = 50       // 지켜본다
      else if (choiceIdx === 1) newLust = 30  // 도와준다
      else if (choiceIdx === 2) newLust = 20  // 자지로 박아준다
    }

    set({
      stats: newStats,
      condition: newCondition,
      lust: newLust,
      log: [...state.log, `이벤트 「${state.currentEvent?.title}」 완료`],
    })
  },

  dismissEvent: () => {
    const state = get()

    // 서포트 카드 스토리 완료 시 진행도 업데이트
    if (state.currentEvent?.id.startsWith('support-story-')) {
      const parts = state.currentEvent.id.split('-')
      const cardId = parts.slice(2, -2).join('-')
      const step = parseInt(parts[parts.length - 1])
      const newProgress = { ...state.supportStoryProgress }
      newProgress[cardId] = step + 1

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
      // 시즌 종료 배틀 체크 (턴 12, 24, 36)
      if (updatedState.turn === 12 || updatedState.turn === 24 || updatedState.turn === 36) {
        set({ currentEvent: null, turn: updatedState.turn + 1 })
        get().startBattle()
        return
      }
      set({
        currentEvent: null,
        scene: GameScene.Training,
        turn: updatedState.turn + 1,
        supportCardPlacements: rollSupportPlacements(updatedState.supportCards),
      })
      saveToDisk(get())
    }
  },

  endGame: () => {
    const state = get()
    const ending = get().getEnding()
    unlockEnding(ending.rank)

    // C랭크 이상 시 아카이브 생성
    const rankOrder = ['SS', 'S', 'A+', 'A', 'B+', 'B', 'C', 'D']
    const rankIdx = rankOrder.indexOf(ending.rank)
    if (rankIdx <= 6 && state.heroine) { // C랭크(idx=6) 이상
      // 가장 높은 스탯을 bonusStat으로
      const statKeys: StatKey[] = ['libido', 'technique', 'capacity', 'endurance', 'charm']
      const topStat = statKeys.reduce((a, b) => state.stats[a] >= state.stats[b] ? a : b)

      const archive: StellaArchive = {
        id: `${state.heroine.id}-${Date.now()}`,
        heroineId: state.heroine.id,
        heroineName: state.heroine.name,
        rank: ending.rank,
        stats: { ...state.stats },
        bonusStat: topStat,
        bonusPercent: 10,
        skillName: `${state.heroine.name}의 유전자`,
        createdAt: Date.now(),
      }
      saveArchive(archive)
    }

    clearSave()
    set({ scene: GameScene.Result, currentEvent: null })
  },

  getEnding: () => {
    const { stats, condition, usedInheritance, fanCount } = get()
    return endings.find(e => e.condition(stats, condition, usedInheritance, fanCount)) ?? endings[endings.length - 1]
  },

  getPhase: () => getPhase(get().turn),

  // ── Battle Actions ──
  startBattle: () => {
    const state = get()
    const prevTurn = state.turn - 1
    let season: 'spring' | 'summer' | 'fall'
    if (prevTurn <= 12) season = 'spring'
    else if (prevTurn <= 24) season = 'summer'
    else season = 'fall'

    const rival = seasonRivals[season]
    const fanRewardMap = { spring: 5000, summer: 10000, fall: 20000 }
    const battleState: BattleState = {
      rivalName: rival.name,
      rivalTitle: rival.title,
      rivalPower: rival.power,
      season,
      isFreeMatch: false,
      fanReward: fanRewardMap[season],
      battleTurn: 0,
      maxBattleTurns: 5,
      pleasure: 0,
      satisfaction: 0,
      phase: 'intro',
      turnLogs: [],
      drawnCards: [],
      introScript: rival.introScript,
      introIndex: 0,
      resultType: null,
    }
    set({ battleState, scene: GameScene.Battle })
    saveToDisk(get())
  },

  startFreeBattle: () => {
    const state = get()
    const rival = getRandomRival(state.turn)
    const season: 'spring' | 'summer' | 'fall' = state.turn <= 12 ? 'spring' : state.turn <= 24 ? 'summer' : 'fall'

    // 출전 비용
    const newCondition = { ...state.condition }
    newCondition.stamina = clampCondition(newCondition.stamina - 10)
    newCondition.mental = clampCondition(newCondition.mental - 5)
    const newLust = clampLust(state.lust + 5)

    const battleState: BattleState = {
      rivalName: rival.name,
      rivalTitle: rival.title,
      rivalPower: rival.power,
      season,
      isFreeMatch: true,
      fanReward: rival.fanReward ?? 0,
      battleTurn: 0,
      maxBattleTurns: 5,
      pleasure: 0,
      satisfaction: 0,
      phase: 'intro',
      turnLogs: [],
      drawnCards: [],
      introScript: rival.introScript,
      introIndex: 0,
      resultType: null,
    }

    set({
      battleState,
      condition: newCondition,
      lust: newLust,
      scene: GameScene.Battle,
    })
    saveToDisk(get())
  },

  advanceBattleTurn: () => {
    const state = get()
    if (!state.battleState) return
    const bs = { ...state.battleState }

    bs.battleTurn++

    // 오토턴 계산
    const stats = state.stats
    const performance = ((stats.technique + stats.charm) / 2 / STAT_MAX) * 20
    const vulnerability = Math.max(0, 15 - (stats.endurance / STAT_MAX) * 10)
    const rand = Math.floor(Math.random() * 7) - 3 // -3 ~ +3

    let satGain = Math.round(performance + rand)
    let pleGain = Math.round(vulnerability + rand)

    // ── 장착 스킬 발동 ──
    const equippedSkillData = state.equippedSkills
      .map(id => getSkillById(id))
      .filter((s): s is Skill => !!s)

    for (const skill of equippedSkillData) {
      const trigger = skill.battleEffect.triggerCondition

      // 패시브: 매 턴 적용
      if (trigger.type === 'always') {
        satGain += skill.battleEffect.satisfactionBonus
        pleGain -= skill.battleEffect.pleasureReduction
        bs.turnLogs = [...bs.turnLogs, {
          turn: bs.battleTurn,
          narration: skill.narrationText,
          pleasureDelta: -skill.battleEffect.pleasureReduction,
          satisfactionDelta: skill.battleEffect.satisfactionBonus,
          isPlayerAction: false,
        }]
      }

      // 조건부: RNG 발동 (50% + charm/STAT_MAX × 30%)
      const charmProb = 0.5 + (stats.charm / STAT_MAX) * 0.3
      if (trigger.type === 'pleasureAbove' && bs.pleasure + pleGain >= trigger.threshold && Math.random() < charmProb) {
        satGain += skill.battleEffect.satisfactionBonus
        pleGain -= skill.battleEffect.pleasureReduction
        bs.turnLogs = [...bs.turnLogs, {
          turn: bs.battleTurn,
          narration: skill.narrationText,
          pleasureDelta: -skill.battleEffect.pleasureReduction,
          satisfactionDelta: skill.battleEffect.satisfactionBonus,
          isPlayerAction: false,
        }]
      }

      if (trigger.type === 'satisfactionAbove' && bs.satisfaction + satGain >= trigger.threshold && Math.random() < charmProb) {
        satGain += skill.battleEffect.satisfactionBonus
        pleGain -= skill.battleEffect.pleasureReduction
        bs.turnLogs = [...bs.turnLogs, {
          turn: bs.battleTurn,
          narration: skill.narrationText,
          pleasureDelta: -skill.battleEffect.pleasureReduction,
          satisfactionDelta: skill.battleEffect.satisfactionBonus,
          isPlayerAction: false,
        }]
      }

      if (trigger.type === 'battleTurn' && bs.battleTurn === trigger.turn) {
        satGain += skill.battleEffect.satisfactionBonus
        pleGain -= skill.battleEffect.pleasureReduction
        bs.turnLogs = [...bs.turnLogs, {
          turn: bs.battleTurn,
          narration: skill.narrationText,
          pleasureDelta: -skill.battleEffect.pleasureReduction,
          satisfactionDelta: skill.battleEffect.satisfactionBonus,
          isPlayerAction: false,
        }]
      }
    }

    bs.satisfaction = Math.min(100, Math.max(0, bs.satisfaction + satGain))
    bs.pleasure = Math.min(100, Math.max(0, bs.pleasure + pleGain))

    const narration = getAutoNarration(bs.pleasure, bs.satisfaction)
    bs.turnLogs = [...bs.turnLogs, {
      turn: bs.battleTurn,
      narration,
      pleasureDelta: pleGain,
      satisfactionDelta: satGain,
      isPlayerAction: false,
    }]

    // 턴 2, 4에서 선택지 제공
    if (bs.battleTurn === 2 || bs.battleTurn === 4) {
      bs.phase = 'choice'
      // onChoice 스킬을 BattleActionCard로 변환하여 카드풀에 합류
      const onChoiceSkills = equippedSkillData.filter(
        s => s.battleEffect.triggerCondition.type === 'onChoice'
      )
      const baseCards = drawCards(3)
      if (onChoiceSkills.length > 0) {
        // 스킬 카드로 기존 카드 일부 교체 (최대 2장)
        const skillCards: BattleActionCard[] = onChoiceSkills.slice(0, 2).map(sk => ({
          id: `skill-${sk.id}`,
          name: sk.name,
          emoji: sk.emoji,
          description: sk.description,
          pleasureEffect: -sk.battleEffect.pleasureReduction,
          satisfactionEffect: sk.battleEffect.satisfactionBonus,
          statBonus: 'charm' as StatKey,
        }))
        // 교체: 뒤쪽 카드를 스킬 카드로
        const merged = [...baseCards]
        for (let i = 0; i < skillCards.length && i < merged.length; i++) {
          merged[merged.length - 1 - i] = skillCards[i]
        }
        bs.drawnCards = merged
      } else {
        bs.drawnCards = baseCards
      }
    } else if (bs.battleTurn >= bs.maxBattleTurns) {
      // 배틀 종료 판정
      if (bs.satisfaction >= 100) bs.resultType = 'win'
      else if (bs.pleasure >= 100) bs.resultType = 'lose'
      else if (bs.satisfaction > bs.pleasure) bs.resultType = 'win'
      else if (bs.pleasure > bs.satisfaction) bs.resultType = 'lose'
      else bs.resultType = 'draw'
      bs.phase = 'result'
    } else {
      bs.phase = 'narration'
    }

    // 즉시 승패 체크
    if (bs.satisfaction >= 100 && bs.phase !== 'result') {
      bs.resultType = 'win'
      bs.phase = 'result'
    } else if (bs.pleasure >= 100 && bs.phase !== 'result') {
      bs.resultType = 'lose'
      bs.phase = 'result'
    }

    set({ battleState: bs })
    saveToDisk(get())
  },

  selectBattleAction: (card: BattleActionCard) => {
    const state = get()
    if (!state.battleState) return
    const bs = { ...state.battleState }

    // 카드 효과 적용 + 스탯 보너스
    let satBonus = card.satisfactionEffect
    let pleBonus = card.pleasureEffect
    if (card.statBonus) {
      const statVal = state.stats[card.statBonus]
      const mult = 1 + (statVal / STAT_MAX) * 0.5
      satBonus = Math.round(satBonus * mult)
      pleBonus = Math.round(pleBonus * mult)
    }

    bs.satisfaction = Math.min(100, Math.max(0, bs.satisfaction + satBonus))
    bs.pleasure = Math.min(100, Math.max(0, bs.pleasure + pleBonus))

    bs.turnLogs = [...bs.turnLogs, {
      turn: bs.battleTurn,
      narration: `[${card.emoji} ${card.name}] ${card.description}`,
      pleasureDelta: pleBonus,
      satisfactionDelta: satBonus,
      isPlayerAction: true,
    }]

    bs.drawnCards = []

    // 즉시 승패 체크
    if (bs.satisfaction >= 100) {
      bs.resultType = 'win'
      bs.phase = 'result'
    } else if (bs.pleasure >= 100) {
      bs.resultType = 'lose'
      bs.phase = 'result'
    } else {
      bs.phase = 'narration'
    }

    set({ battleState: bs })

    // 자동으로 다음 오토턴 진행 (result가 아닌 경우)
    if (bs.phase === 'narration') {
      setTimeout(() => get().advanceBattleTurn(), 0)
    }

    saveToDisk(get())
  },

  finishBattle: () => {
    const state = get()
    if (!state.battleState) return

    const bs = state.battleState
    const result = bs.resultType
    const newStats = { ...state.stats }
    const logEntries = [...state.log]
    let fanGain = 0
    let spGain = 0

    if (bs.isFreeMatch) {
      // ── 프리매치 보상 ──
      if (result === 'win') {
        newStats.technique = clampStat(newStats.technique + 10)
        newStats.charm = clampStat(newStats.charm + 10)
        fanGain = bs.fanReward
        spGain = 2
        logEntries.push(`라이브 배틀 승리! (vs ${bs.rivalName}) — 기교+10, 매혹+10, 📺 팬+${fanGain.toLocaleString()}, SP+2`)
      } else if (result === 'draw') {
        newStats.endurance = clampStat(newStats.endurance + 5)
        fanGain = Math.round(bs.fanReward * 0.3)
        spGain = 1
        logEntries.push(`라이브 배틀 무승부 (vs ${bs.rivalName}) — 인내+5, 📺 팬+${fanGain.toLocaleString()}, SP+1`)
      } else {
        logEntries.push(`라이브 배틀 패배 (vs ${bs.rivalName})`)
      }

      const newFanCount = state.fanCount + fanGain

      // 프리매치 후 턴 소비 + dismissTrainingResult와 동일한 후처리
      set({
        stats: newStats,
        fanCount: newFanCount,
        skillPoints: state.skillPoints + spGain,
        log: logEntries,
        battleState: null,
      })

      // 이벤트 체크 → 턴 진행
      const updatedState = get()
      if (updatedState.turn >= updatedState.maxTurns) {
        get().endGame()
      } else {
        // 시즌 종료 배틀 체크 (턴 12, 24, 36)
        if (updatedState.turn === 12 || updatedState.turn === 24 || updatedState.turn === 36) {
          set({ turn: updatedState.turn + 1 })
          get().startBattle()
          return
        }

        const event = checkForEvent(updatedState)
        if (event) {
          set({
            currentEvent: event,
            triggeredEventIds: [...updatedState.triggeredEventIds, event.id],
            scene: GameScene.Event,
            turn: updatedState.turn + 1,
            supportCardPlacements: rollSupportPlacements(updatedState.supportCards),
          })
        } else {
          set({
            scene: GameScene.Training,
            turn: updatedState.turn + 1,
            supportCardPlacements: rollSupportPlacements(updatedState.supportCards),
          })
        }
      }
      saveToDisk(get())
    } else {
      // ── 평가전 보상 ──
      if (result === 'win') {
        newStats.technique = clampStat(newStats.technique + 30)
        newStats.charm = clampStat(newStats.charm + 30)
        fanGain = bs.fanReward
        spGain = 5
        logEntries.push(`평가전 승리! (vs ${bs.rivalName}) — 기교+30, 매혹+30, 📺 팬+${fanGain.toLocaleString()}, SP+5`)
      } else if (result === 'draw') {
        newStats.endurance = clampStat(newStats.endurance + 15)
        fanGain = Math.round(bs.fanReward * 0.5)
        spGain = 2
        logEntries.push(`평가전 무승부 (vs ${bs.rivalName}) — 인내+15, 📺 팬+${fanGain.toLocaleString()}, SP+2`)
      } else {
        fanGain = Math.round(bs.fanReward * 0.2)
        logEntries.push(`평가전 패배 (vs ${bs.rivalName}) — 📺 팬+${fanGain.toLocaleString()}`)
      }

      set({
        stats: newStats,
        fanCount: state.fanCount + fanGain,
        skillPoints: state.skillPoints + spGain,
        log: logEntries,
        battleState: null,
        scene: GameScene.Training,
        supportCardPlacements: rollSupportPlacements(state.supportCards),
      })
      saveToDisk(get())
    }
  },

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

  // ── Skill Shop Actions ──
  openSkillShop: () => set({ showSkillShop: true }),
  closeSkillShop: () => set({ showSkillShop: false }),

  learnSkill: (skillId: string) => {
    const state = get()
    const skill = getSkillById(skillId)
    if (!skill) return
    if (state.learnedSkills.includes(skillId)) return

    // 힌트 할인: Lv × 10%
    const hintLv = state.skillHints[skillId] ?? 0
    const discount = hintLv * 0.1
    const finalCost = Math.round(skill.cost * (1 - discount))

    if (state.skillPoints < finalCost) return

    set({
      skillPoints: state.skillPoints - finalCost,
      learnedSkills: [...state.learnedSkills, skillId],
    })
    saveToDisk(get())
  },

  equipSkill: (skillId: string) => {
    const state = get()
    if (!state.learnedSkills.includes(skillId)) return
    if (state.equippedSkills.includes(skillId)) return
    if (state.equippedSkills.length >= 5) return

    set({ equippedSkills: [...state.equippedSkills, skillId] })
    saveToDisk(get())
  },

  unequipSkill: (skillId: string) => {
    const state = get()
    set({ equippedSkills: state.equippedSkills.filter(id => id !== skillId) })
    saveToDisk(get())
  },
}))

function getHeroineEvents(heroineId?: string): GameEvent[] {
  if (heroineId === 'leona') return eventsReona
  return events
}

function checkForEvent(state: GameState): GameEvent | null {
  const phase = getPhase(state.turn)
  const allEvents = getHeroineEvents(state.heroine?.id)

  for (const event of allEvents) {
    if (state.triggeredEventIds.includes(event.id)) continue
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
  if (state.turn % 5 !== 0) return null

  const eligibleCards = state.supportCards.filter(card => {
    const progress = state.supportStoryProgress[card.id] ?? 0
    return progress < 3
  })

  if (eligibleCards.length === 0) return null

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
