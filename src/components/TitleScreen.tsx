import { useGameStore } from '../stores/gameStore'

export default function TitleScreen() {
  const startGame = useGameStore(s => s.startGame)
  const loadSavedGame = useGameStore(s => s.loadSavedGame)

  const handleContinue = () => {
    if (!loadSavedGame()) {
      alert('세이브 데이터가 없습니다')
    }
  }

  return (
    <div className="screen title-screen">
      <div className="title-content">
        <h1 className="game-title">
          <span className="title-main">메스육</span>
          <span className="title-sub">― 조교 시뮬레이션 ―</span>
        </h1>
        <p className="title-tagline">그녀를, 당신의 색으로 물들여라.</p>
        <div className="title-buttons">
          <button className="btn btn-primary" onClick={startGame}>
            NEW GAME
          </button>
          <button className="btn btn-secondary" onClick={handleContinue}>
            CONTINUE
          </button>
        </div>
      </div>
      <div className="title-decoration" />
    </div>
  )
}
