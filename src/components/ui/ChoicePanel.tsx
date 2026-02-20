import { Stats, Condition, StatKey, ConditionKey } from '../../types/game'

const STAT_LABELS: Record<StatKey, string> = {
  libido: '연심',
  technique: '기교',
  capacity: '수용',
  endurance: '인내',
  charm: '매혹',
}

const COND_LABELS: Record<ConditionKey, string> = {
  stamina: '체력',
  mental: '정신력',
}

interface Choice {
  text: string
  statEffects?: Partial<Stats>
  conditionEffects?: Partial<Condition>
}

interface Props {
  choices: Choice[]
  onSelect: (index: number) => void
}

export default function ChoicePanel({ choices, onSelect }: Props) {
  return (
    <div className="choice-panel">
      {choices.map((choice, i) => {
        const statEntries = choice.statEffects
          ? (Object.entries(choice.statEffects).filter(([, v]) => v !== 0 && v !== undefined) as [StatKey, number][])
          : []
        const condEntries = choice.conditionEffects
          ? (Object.entries(choice.conditionEffects).filter(([, v]) => v !== 0 && v !== undefined) as [ConditionKey, number][])
          : []
        const hasEffects = statEntries.length > 0 || condEntries.length > 0

        return (
          <button key={i} className="choice-btn" onClick={() => onSelect(i)}>
            <span className="choice-number">{i + 1}</span>
            <div className="choice-content">
              <span className="choice-text">{choice.text}</span>
              {hasEffects && (
                <div className="choice-effects">
                  {statEntries.map(([stat, value]) => (
                    <span key={stat} className={`choice-effect ${value > 0 ? 'choice-effect-positive' : 'choice-effect-negative'}`}>
                      {STAT_LABELS[stat]} {value > 0 ? '+' : ''}{value}
                    </span>
                  ))}
                  {condEntries.map(([cond, value]) => (
                    <span key={cond} className={`choice-effect ${value > 0 ? 'choice-effect-positive' : 'choice-effect-negative'}`}>
                      {COND_LABELS[cond]} {value > 0 ? '+' : ''}{value}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </button>
        )
      })}
    </div>
  )
}
