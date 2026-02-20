export type SkillGrade = 'normal' | 'rare' | 'unique'
export type SkillType = 'offense' | 'recovery' | 'debuff' | 'passive'

export type SkillTriggerCondition =
  | { type: 'always' }
  | { type: 'pleasureAbove'; threshold: number }
  | { type: 'satisfactionAbove'; threshold: number }
  | { type: 'battleTurn'; turn: number }
  | { type: 'onChoice' }

export interface SkillBattleEffect {
  satisfactionBonus: number
  pleasureReduction: number
  triggerCondition: SkillTriggerCondition
}

export interface Skill {
  id: string
  name: string
  emoji: string
  description: string
  grade: SkillGrade
  type: SkillType
  battleEffect: SkillBattleEffect
  cost: number
  hintSource: string
  narrationText: string
}
