import { Stats, StatKey, STAT_MAX } from '../../types/game'

const STAT_LABELS: Record<StatKey, string> = {
  libido: '연심',
  technique: '기교',
  capacity: '수용',
  endurance: '인내',
  charm: '매혹',
}

const STAT_ORDER: StatKey[] = ['libido', 'technique', 'capacity', 'endurance', 'charm']

interface GradeInfo {
  grade: string
  color: string
}

function getGrade(value: number): GradeInfo {
  if (value >= 1200) return { grade: 'S+', color: '#ffd700' }
  if (value >= 1100) return { grade: 'S', color: '#ffd700' }
  if (value >= 950) return { grade: 'A+', color: '#ff4444' }
  if (value >= 800) return { grade: 'A', color: '#ff4444' }
  if (value >= 700) return { grade: 'B+', color: '#b36ddb' }
  if (value >= 500) return { grade: 'B', color: '#b36ddb' }
  if (value >= 300) return { grade: 'C', color: '#3498db' }
  if (value >= 150) return { grade: 'D', color: '#27ae60' }
  return { grade: 'E', color: '#888' }
}

interface Props {
  stats: Stats
}

export default function StatList({ stats }: Props) {
  const total = STAT_ORDER.reduce((sum, key) => sum + stats[key], 0)

  return (
    <div className="stat-list">
      {STAT_ORDER.map(key => {
        const value = stats[key]
        const { grade, color } = getGrade(value)
        const percent = Math.min(100, (value / STAT_MAX) * 100)
        return (
          <div key={key} className="stat-list-row">
            <span className="stat-list-name">{STAT_LABELS[key]}</span>
            <div className="stat-list-bar-track">
              <div className="stat-list-bar-fill" style={{ width: `${percent}%`, background: color }} />
            </div>
            <span className="stat-list-value">{value}</span>
            <span className="stat-list-grade" style={{ color }}>{grade}</span>
          </div>
        )
      })}
      <div className="stat-list-total">
        총합 <span className="stat-list-total-value">{total}</span>
      </div>
    </div>
  )
}
