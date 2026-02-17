export const STAT_MAX = 1250

export enum GameScene {
  Title = 'title',
  HeroineSelect = 'heroineSelect',
  SupportSelect = 'supportSelect',
  Training = 'training',
  Event = 'event',
  Result = 'result',
}

/** 5대 능력치 (0-1250) */
export interface Stats {
  libido: number      // 연심 — 성욕/체력
  technique: number   // 기교 — 감도/스피드
  capacity: number    // 수용 — 파워/명기
  endurance: number   // 인내 — 근성/정신력
  charm: number       // 매혹 — 지능/매력
}

export type StatKey = keyof Stats

export interface Condition {
  stamina: number  // 체력 0-100
  mental: number   // 정신력 0-100
}

export type ConditionKey = keyof Condition

export type GamePhase = 'early' | 'mid' | 'late' | 'final'

export interface Heroine {
  id: string
  name: string
  title: string
  description: string
  portrait: string
  baseStats: Stats
  baseCondition: Condition
  club: string
}

export interface StatEffect {
  stat: StatKey
  min: number
  max: number
}

export interface ConditionEffect {
  condition: ConditionKey
  value: number
}

export interface TrainingOption {
  id: string
  name: string
  description: string
  emoji: string
  level: number
  statEffects: StatEffect[]
  conditionEffects: ConditionEffect[]
  unlockTurn?: number
  unlockStat?: { stat: StatKey; value: number }
  successText?: string
  failText?: string
}

export interface EventChoice {
  text: string
  statEffects: Partial<Stats>
  conditionEffects: Partial<Condition>
  followUpText: string
}

export interface GameEvent {
  id: string
  title: string
  text: string
  trigger: EventTrigger
  choices: EventChoice[]
  phase?: GamePhase
  heroineId?: string  // 특정 히로인 전용 이벤트
}

export type EventTrigger =
  | { type: 'turn'; turn: number }
  | { type: 'stat'; stat: StatKey; threshold: number; direction: 'above' | 'below' }
  | { type: 'phase'; phase: GamePhase }

export type EndingRank = 'S' | 'A' | 'B' | 'C' | 'D'

export interface Ending {
  rank: EndingRank
  title: string
  description: string
  condition: (stats: Stats, condition: Condition) => boolean
}

/** 서포트 카드 */
export interface SupportCardStoryStep {
  title: string
  text: string
  choices: EventChoice[]
}

export interface SupportCard {
  id: string
  characterName: string
  cardName: string
  attribute: StatKey
  rarity: 'SSR'
  portrait: string
  flavorText: string
  // 게임플레이 이점
  trainingBonus: { stat: StatKey; percent: number }[]
  skillName: string
  skillDesc: string
  // 3단계 스토리
  story: [SupportCardStoryStep, SupportCardStoryStep, SupportCardStoryStep]
  // 최종 보상
  finalBonusStat: StatKey
  finalBonusPercent: number
}

export interface GameState {
  scene: GameScene
  turn: number
  maxTurns: number
  stats: Stats
  condition: Condition
  heroine: Heroine | null
  supportCards: SupportCard[]
  supportStoryProgress: Record<string, number>  // cardId -> step completed (0,1,2,3)
  currentEvent: GameEvent | null
  triggeredEventIds: string[]
  log: string[]
}
