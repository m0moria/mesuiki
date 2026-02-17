import { useGameStore, getPhase } from '../stores/gameStore'
import { STAT_MAX } from '../types/game'
import { trainings } from '../data/trainings'
import StatRadar from './ui/StatRadar'
import CorruptionBar from './ui/CorruptionBar'
import ConditionGauge from './ui/ConditionGauge'
import TurnCounter from './ui/TurnCounter'

const PHASE_LABELS: Record<string, string> = {
  early: '초반 — 기초 조교',
  mid: '중반 — 타락의 시작',
  late: '후반 — 메스화 완성',
  final: '최종 — 그랑프리',
}

export default function TrainingMain() {
  const { stats, condition, turn, maxTurns, heroine, selectTraining } = useGameStore()
  const phase = getPhase(turn)

  // Calculate corruption progress (average of all 5 stats as percentage of STAT_MAX)
  const avgStat = (stats.libido + stats.technique + stats.capacity + stats.endurance + stats.charm) / 5
  const corruptionProgress = Math.round((avgStat / STAT_MAX) * 100)

  // Filter available trainings based on unlock conditions
  const availableTrainings = trainings.filter(t => {
    if (t.unlockTurn && turn < t.unlockTurn) return false
    if (t.unlockStat && stats[t.unlockStat.stat] < t.unlockStat.value) return false
    return true
  })

  return (
    <div className="screen training-screen">
      {/* Header */}
      <div className="training-header">
        <div className="heroine-badge">
          <span className="heroine-badge-portrait">{heroine?.portrait}</span>
          <div className="heroine-badge-info">
            <span className="heroine-badge-name">{heroine?.name}</span>
            <span className="heroine-badge-phase">{PHASE_LABELS[phase]}</span>
          </div>
        </div>
        <TurnCounter current={turn} max={maxTurns} />
      </div>

      <div className="training-body">
        {/* Left panel — Stats */}
        <div className="panel stats-panel">
          <h3 className="panel-title">스테이터스</h3>
          <StatRadar stats={stats} />
          <div className="gauges">
            <CorruptionBar value={corruptionProgress} />
            <ConditionGauge label="체력" value={condition.stamina} color="#27ae60" />
            <ConditionGauge label="정신력" value={condition.mental} color="#8e44ad" />
          </div>
        </div>

        {/* Right panel — Training choices */}
        <div className="panel training-panel">
          <h3 className="panel-title">조교 메뉴</h3>
          <div className="training-options">
            {availableTrainings.map(t => (
              <button
                key={t.id}
                className={`training-btn training-level-${t.level}`}
                onClick={() => selectTraining(t)}
              >
                <span className="training-emoji">{t.emoji}</span>
                <div className="training-info">
                  <div className="training-name-row">
                    <span className="training-name">{t.name}</span>
                    {t.level > 1 && <span className="training-level">Lv.{t.level}</span>}
                  </div>
                  <span className="training-desc">{t.description}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
