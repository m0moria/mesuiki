import { useState } from 'react'
import { useGameStore } from '../stores/gameStore'
import { DialogueLine } from '../types/game'
import StatRadar from './ui/StatRadar'
import TypeWriter from './ui/TypeWriter'

export default function ResultScreen() {
  const { stats, condition, heroine, getEnding, resetGame, fanCount } = useGameStore()
  const ending = getEnding()
  const [lineIndex, setLineIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [showStats, setShowStats] = useState(false)

  const totalScore = stats.libido + stats.technique + stats.capacity + stats.endurance + stats.charm
  const currentLine: DialogueLine | undefined = ending.script[lineIndex]

  const handleClick = () => {
    if (isTyping) {
      setIsTyping(false)
      return
    }
    if (lineIndex < ending.script.length - 1) {
      setLineIndex(lineIndex + 1)
      setIsTyping(true)
    } else {
      setShowStats(true)
    }
  }

  const getSpeakerClass = (line: DialogueLine) => {
    switch (line.type) {
      case 'narration': return 'vn-narration'
      case 'thought': return 'vn-thought'
      case 'action': return 'vn-action'
      default: return 'vn-dialogue'
    }
  }

  return (
    <div className="screen result-screen">
      <div className="result-container">
        <h2 className="result-rank-label">RANK</h2>
        <div className={`result-rank result-rank-${ending.rank}`}>{ending.rank}</div>
        <h3 className="result-title">{ending.title}</h3>

        {!showStats && currentLine && (
          <div
            className={`vn-textbox ${getSpeakerClass(currentLine)}`}
            onClick={handleClick}
            style={{ maxWidth: 700, cursor: 'pointer' }}
          >
            {currentLine.speaker && (
              <div className="vn-speaker">{currentLine.speaker}</div>
            )}
            <div className="vn-text">
              <TypeWriter
                key={lineIndex}
                text={currentLine.text}
                speed={20}
                onComplete={() => setIsTyping(false)}
                skip={!isTyping}
              />
            </div>
            {!isTyping && lineIndex < ending.script.length - 1 && (
              <div className="vn-next-indicator">▼</div>
            )}
          </div>
        )}

        {showStats && (
          <>
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
                  {fanCount > 0 && (
                    <>
                      <div className="result-divider" />
                      <div>📺 팬: {fanCount.toLocaleString()}</div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="result-heroine">
              <span className="result-portrait">{heroine?.portrait}</span>
              <span>{heroine?.name} — {heroine?.club}</span>
            </div>

            <button className="btn btn-primary" onClick={resetGame}>
              타이틀로 돌아가기
            </button>
          </>
        )}
      </div>
    </div>
  )
}
