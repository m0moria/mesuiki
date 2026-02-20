import { useState } from 'react'
import { useGameStore } from '../stores/gameStore'
import { skills, getSkillById } from '../data/skills'
import { SkillType } from '../types/skill'

const TYPE_TABS: { key: SkillType | 'all'; label: string; className: string }[] = [
  { key: 'all', label: '전체', className: '' },
  { key: 'offense', label: '공격', className: 'skill-type-offense' },
  { key: 'recovery', label: '회복', className: 'skill-type-recovery' },
  { key: 'debuff', label: '디버프', className: 'skill-type-debuff' },
  { key: 'passive', label: '패시브', className: 'skill-type-passive' },
]

const GRADE_LABELS = {
  normal: '일반',
  rare: '레어',
  unique: '고유',
}

export default function SkillShop() {
  const {
    skillPoints, skillHints, learnedSkills, equippedSkills,
    closeSkillShop, learnSkill, equipSkill, unequipSkill,
  } = useGameStore()

  const [filter, setFilter] = useState<SkillType | 'all'>('all')

  const filteredSkills = filter === 'all' ? skills : skills.filter(s => s.type === filter)

  return (
    <div className="skill-shop-overlay" onClick={closeSkillShop}>
      <div className="skill-shop-modal" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="skill-shop-header">
          <h2>스킬 상점</h2>
          <span className="skill-shop-sp">SP: {skillPoints}</span>
          <button className="skill-shop-close" onClick={closeSkillShop}>X</button>
        </div>

        {/* Equipped slots */}
        <div className="skill-shop-equipped">
          <h4>장착 스킬 ({equippedSkills.length}/5)</h4>
          <div className="skill-equipped-slots">
            {Array.from({ length: 5 }).map((_, i) => {
              const skillId = equippedSkills[i]
              const skill = skillId ? getSkillById(skillId) : null
              return (
                <div key={i} className={`skill-equipped-slot ${skill ? `skill-grade-${skill.grade}` : ''}`}>
                  {skill ? (
                    <>
                      <span className="skill-slot-emoji">{skill.emoji}</span>
                      <span className="skill-slot-name">{skill.name}</span>
                      <button className="skill-slot-remove" onClick={() => unequipSkill(skill.id)}>-</button>
                    </>
                  ) : (
                    <span className="skill-slot-empty">-</span>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Type filter tabs */}
        <div className="skill-shop-tabs">
          {TYPE_TABS.map(tab => (
            <button
              key={tab.key}
              className={`skill-tab ${filter === tab.key ? 'skill-tab-active' : ''} ${tab.className}`}
              onClick={() => setFilter(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skill grid */}
        <div className="skill-shop-grid">
          {filteredSkills.map(skill => {
            const isLearned = learnedSkills.includes(skill.id)
            const isEquipped = equippedSkills.includes(skill.id)
            const hintLv = skillHints[skill.id] ?? 0
            const discount = hintLv * 0.1
            const finalCost = Math.round(skill.cost * (1 - discount))
            const canAfford = skillPoints >= finalCost
            const canEquip = isLearned && !isEquipped && equippedSkills.length < 5

            return (
              <div key={skill.id} className={`skill-card skill-grade-${skill.grade} skill-type-${skill.type}`}>
                <div className="skill-card-header">
                  <span className="skill-card-emoji">{skill.emoji}</span>
                  <span className="skill-card-name">{skill.name}</span>
                  <span className="skill-card-grade">{GRADE_LABELS[skill.grade]}</span>
                </div>
                <p className="skill-card-desc">{skill.description}</p>
                <div className="skill-card-meta">
                  {hintLv > 0 && <span className="skill-hint-lv">힌트 Lv.{hintLv}</span>}
                  {!isLearned && (
                    <span className={`skill-cost ${canAfford ? '' : 'skill-cost-insufficient'}`}>
                      {discount > 0 ? (
                        <><s>{skill.cost}</s> {finalCost} SP</>
                      ) : (
                        <>{finalCost} SP</>
                      )}
                    </span>
                  )}
                </div>
                <div className="skill-card-actions">
                  {!isLearned && (
                    <button
                      className="btn-skill-learn"
                      disabled={!canAfford}
                      onClick={() => learnSkill(skill.id)}
                    >
                      습득
                    </button>
                  )}
                  {isLearned && !isEquipped && (
                    <button
                      className="btn-skill-equip"
                      disabled={!canEquip}
                      onClick={() => equipSkill(skill.id)}
                    >
                      장착
                    </button>
                  )}
                  {isEquipped && (
                    <button
                      className="btn-skill-unequip"
                      onClick={() => unequipSkill(skill.id)}
                    >
                      해제
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
