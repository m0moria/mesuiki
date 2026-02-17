import { useGameStore } from '../stores/gameStore'
import { heroines } from '../data/heroines'

export default function HeroineSelect() {
  const selectHeroine = useGameStore(s => s.selectHeroine)

  return (
    <div className="screen heroine-select-screen">
      <h2 className="screen-title">대상 선택</h2>
      <p className="screen-subtitle">조교할 히로인을 선택하세요</p>
      <div className="heroine-cards">
        {heroines.map(h => (
          <div key={h.id} className="heroine-card">
            <div className="heroine-portrait">{h.portrait}</div>
            <div className="heroine-info">
              <h3 className="heroine-name">{h.name}</h3>
              <p className="heroine-title-text">{h.title}</p>
              <p className="heroine-club">소속: {h.club}</p>
              <p className="heroine-desc">{h.description}</p>
              <div className="heroine-base-stats">
                <span>연심 {h.baseStats.libido}</span>
                <span>기교 {h.baseStats.technique}</span>
                <span>수용 {h.baseStats.capacity}</span>
                <span>인내 {h.baseStats.endurance}</span>
                <span>매혹 {h.baseStats.charm}</span>
              </div>
            </div>
            <button className="btn btn-primary" onClick={() => selectHeroine(h)}>
              선택
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
