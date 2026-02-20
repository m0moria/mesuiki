export const STAT_MAX = 1250

export enum GameScene {
  Title = 'title',
  HeroineSelect = 'heroineSelect',
  InheritanceSelect = 'inheritanceSelect',
  SupportSelect = 'supportSelect',
  Training = 'training',
  Event = 'event',
  Result = 'result',
  Battle = 'battle',
}

export type TrainingResult = 'excellent' | 'success' | 'fail' | 'catastrophe'
export type ConditionStatus = 'inHeat' | 'normal' | 'frigid' | 'trainPhobia'

export interface StellaArchive {
  id: string
  heroineId: string
  heroineName: string
  rank: EndingRank
  stats: Stats
  bonusStat: StatKey
  bonusPercent: number
  skillName: string
  createdAt: number
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

/** 4계절 페이즈 (plan_scenario.md 기반) */
export type GamePhase = 'spring' | 'summer' | 'fall' | 'winter'

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

/** VN 대사 라인 타입 */
export type DialogueType = 'dialogue' | 'narration' | 'thought' | 'action'

export interface DialogueLine {
  speaker?: string   // 화자 이름 (narration/action은 생략)
  text: string
  type: DialogueType
}

export interface EventChoice {
  text: string
  statEffects: Partial<Stats>
  conditionEffects: Partial<Condition>
  followUpScript: DialogueLine[]  // VN 스크립트
}

export interface GameEvent {
  id: string
  title: string
  script: DialogueLine[]  // VN 스크립트
  trigger: EventTrigger
  choices: EventChoice[]
  phase?: GamePhase
  heroineId?: string
}

export type EventTrigger =
  | { type: 'turn'; turn: number }
  | { type: 'stat'; stat: StatKey; threshold: number; direction: 'above' | 'below' }
  | { type: 'phase'; phase: GamePhase }

export type EndingRank = 'SS' | 'S' | 'A+' | 'A' | 'B+' | 'B' | 'C' | 'D'

export type FanRank = 'underground' | 'rising' | 'national' | 'worldclass'

export interface Ending {
  rank: EndingRank
  title: string
  script: DialogueLine[]  // VN 스크립트
  condition: (stats: Stats, condition: Condition, usedInheritance?: boolean, fanCount?: number) => boolean
}

/** 서포트 카드 */
export interface SupportCardStoryStep {
  title: string
  script: DialogueLine[]  // VN 스크립트
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
  trainingBonus: { stat: StatKey; percent: number }[]
  skillName: string
  skillDesc: string
  story: [SupportCardStoryStep, SupportCardStoryStep, SupportCardStoryStep]
  finalBonusStat: StatKey
  finalBonusPercent: number
}

/** 배틀 액션 카드 */
export interface BattleActionCard {
  id: string
  name: string
  emoji: string
  description: string
  pleasureEffect: number   // 쾌감 게이지 증감 (음수 = 상대 쾌감 올림)
  satisfactionEffect: number  // 만족도 게이지 증감
  statBonus?: StatKey  // 이 스탯이 높으면 효과 증폭
}

/** 배틀 턴 로그 */
export interface BattleTurnLog {
  turn: number
  narration: string
  pleasureDelta: number
  satisfactionDelta: number
  isPlayerAction: boolean
}

/** 배틀 상태 */
export interface BattleState {
  rivalName: string
  rivalTitle: string
  rivalPower: number
  season: 'spring' | 'summer' | 'fall'
  isFreeMatch: boolean
  fanReward: number
  battleTurn: number
  maxBattleTurns: number
  pleasure: number       // 0→100 패배 게이지
  satisfaction: number   // 0→100 승리 게이지
  phase: 'intro' | 'narration' | 'choice' | 'result'
  turnLogs: BattleTurnLog[]
  drawnCards: BattleActionCard[]
  introScript: DialogueLine[]
  introIndex: number
  resultType: 'win' | 'lose' | 'draw' | null
}

export interface LastTrainingResult {
  result: TrainingResult
  statChanges: Partial<Stats>
  conditionChanges: Partial<Condition>
  trainingName: string
  trainingId: string
  friendshipBonus?: boolean
  bondChanges?: Record<string, number>
  successText?: string
  failText?: string
}

export interface GameState {
  scene: GameScene
  turn: number
  maxTurns: number
  stats: Stats
  condition: Condition
  lust: number
  conditionStatus: ConditionStatus
  trainPhobiaTurns: number
  heroine: Heroine | null
  supportCards: SupportCard[]
  supportStoryProgress: Record<string, number>
  currentEvent: GameEvent | null
  triggeredEventIds: string[]
  log: string[]
  lastTrainingResult: LastTrainingResult | null
  showTrainingResult: boolean
  inheritanceArchives: StellaArchive[]
  usedInheritance: boolean
  bondGauges: Record<string, number>
  supportCardPlacements: Record<string, StatKey>
  fanCount: number
  battleState: BattleState | null
  lustEventPending: boolean
  skillPoints: number
  skillHints: Record<string, number>
  learnedSkills: string[]
  equippedSkills: string[]
  showSkillShop: boolean
}
