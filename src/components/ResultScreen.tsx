import { useGameStore } from '../stores/gameStore'
import StatRadar from './ui/StatRadar'

export default function ResultScreen() {
  const { stats, condition, heroine, getEnding, resetGame } = useGameStore()
  const ending = getEnding()

  const totalScore = stats.libido + stats.technique + stats.capacity + stats.endurance + stats.charm

  return (
    <div className="screen result-screen">
      <div className="result-container">
        <h2 className="result-rank-label">RANK</h2>
        <div className={`result-rank result-rank-${ending.rank}`}>{ending.rank}</div>
        <h3 className="result-title">{ending.title}</h3>

        <div className="result-body">
          <div className="result-stats">
            <StatRadar stats={stats} />
            <div className="result-stat-list">
              <div>연심: {stats.libido}</div>
              <div>기교: {stats.technique}</div>
              <div>수용: {stats.capacity}</div>
              <div>인내: {stats.endurance}</div>
              <div>매혹: {stats.charm}</div>
              <div className="result-divider" />
              <div>체력: {condition.stamina}</div>
              <div>정신력: {condition.mental}</div>
              <div className="result-total">총합: {totalScore}</div>
            </div>
          </div>

          <div className="result-text">
            {ending.description.split('\n').map((line, i) => (
              <p key={i}>{line || '\u00A0'}</p>
            ))}
          </div>
        </div>

        <div className="result-heroine">
          <span className="result-portrait">{heroine?.portrait}</span>
          <span>{heroine?.name} — {heroine?.club}</span>
        </div>

        <button className="btn btn-primary" onClick={resetGame}>
          타이틀로 돌아가기
        </button>
      </div>
    </div>
  )
}
