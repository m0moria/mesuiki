import { useState, useCallback, useEffect, useRef } from 'react'
import { useGameStore } from '../stores/gameStore'
import TypeWriter from './ui/TypeWriter'
import ConditionGauge from './ui/ConditionGauge'
import { battleResultTexts } from '../data/battleData'
import { getSkillById } from '../data/skills'
import { playSound, stopAllSounds, getNarrationSound, getBattleActionSound } from '../utils/sound'

export default function BattleScene() {
  const {
    battleState, advanceBattleTurn, selectBattleAction, finishBattle,
    equippedSkills,
  } = useGameStore()
  const [isTyping, setIsTyping] = useState(true)

  const handleTypingComplete = useCallback(() => {
    setIsTyping(false)
  }, [])

  // Track narration turn count for sound trigger
  const prevTurnLogsLen = useRef(0)

  // Sound on narration phase (new log entry)
  useEffect(() => {
    if (!battleState || battleState.phase !== 'narration') return
    if (battleState.turnLogs.length > prevTurnLogsLen.current) {
      const sound = getNarrationSound(battleState.pleasure, battleState.satisfaction)
      playSound(sound)
    }
    prevTurnLogsLen.current = battleState.turnLogs.length
  }, [battleState?.phase, battleState?.turnLogs.length])

  // Sound on result phase
  useEffect(() => {
    if (!battleState || battleState.phase !== 'result') return
    if (battleState.resultType === 'win' || battleState.resultType === 'lose') {
      playSound('squirting')
    }
    return () => stopAllSounds()
  }, [battleState?.phase, battleState?.resultType])

  if (!battleState) return null

  const { phase, introScript, introIndex, turnLogs, pleasure, satisfaction, drawnCards, resultType, rivalName, rivalTitle, battleTurn, maxBattleTurns, isFreeMatch, fanReward } = battleState

  // ── Intro Phase: VN-style script ──
  if (phase === 'intro') {
    const currentLine = introScript[introIndex]

    const handleIntroClick = () => {
      if (isTyping) {
        setIsTyping(false)
        return
      }
      if (introIndex < introScript.length - 1) {
        // Advance intro line
        const newBs = { ...battleState, introIndex: introIndex + 1 }
        useGameStore.setState({ battleState: newBs })
        setIsTyping(true)
      } else {
        // Intro done → start first auto turn
        const newBs = { ...battleState, phase: 'narration' as const }
        useGameStore.setState({ battleState: newBs })
        setTimeout(() => advanceBattleTurn(), 0)
      }
    }

    const getSpeakerClass = () => {
      switch (currentLine?.type) {
        case 'narration': return 'vn-narration'
        case 'thought': return 'vn-thought'
        case 'action': return 'vn-action'
        default: return 'vn-dialogue'
      }
    }

    return (
      <div className="screen event-screen" onClick={handleIntroClick}>
        <div className="event-container">
          <h2 className="event-title">{isFreeMatch ? '📡 라이브 배틀' : '평가전'} — {rivalTitle}</h2>
          <div className="event-dialogue-area" style={{ width: '100%' }}>
            {currentLine && (
              <div className={`vn-textbox ${getSpeakerClass()}`}>
                {currentLine.speaker && (
                  <div className="vn-speaker">{currentLine.speaker}</div>
                )}
                <div className="vn-text">
                  <TypeWriter
                    key={`intro-${introIndex}`}
                    text={currentLine.text}
                    speed={20}
                    onComplete={handleTypingComplete}
                    skip={!isTyping}
                  />
                </div>
                {!isTyping && introIndex < introScript.length - 1 && (
                  <div className="vn-next-indicator">▼</div>
                )}
              </div>
            )}
            <div className="vn-progress">
              {introIndex + 1} / {introScript.length}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ── Narration Phase: Show logs + gauges ──
  if (phase === 'narration') {
    const lastLog = turnLogs[turnLogs.length - 1]

    const handleNarrationClick = () => {
      advanceBattleTurn()
    }

    return (
      <div className="screen battle-screen" onClick={handleNarrationClick}>
        <div className="battle-container">
          <h2 className="battle-title">{isFreeMatch ? '📡 라이브 배틀' : '평가전'} vs {rivalName}</h2>
          <div className="battle-turn-indicator">턴 {battleTurn} / {maxBattleTurns}</div>

          {equippedSkills.length > 0 && (
            <div className="battle-skill-indicators">
              {equippedSkills.map(id => {
                const sk = getSkillById(id)
                return sk ? <span key={id} className={`battle-skill-icon skill-grade-${sk.grade}`} title={sk.name}>{sk.emoji}</span> : null
              })}
            </div>
          )}

          <div className="battle-gauges">
            <ConditionGauge label="만족도 (승리)" value={satisfaction} color="#27ae60" />
            <ConditionGauge label="쾌감 (패배)" value={pleasure} color="#e74c3c" />
          </div>

          <div className="battle-log">
            {turnLogs.map((log, i) => (
              <div key={i} className={`battle-log-entry ${log.isPlayerAction ? 'battle-log-player' : ''}`}>
                <span className="battle-log-turn">T{log.turn}</span>
                <span className="battle-log-text">{log.narration}</span>
                <span className="battle-log-deltas">
                  {log.satisfactionDelta !== 0 && (
                    <span className={log.satisfactionDelta > 0 ? 'delta-positive' : 'delta-negative'}>
                      만족 {log.satisfactionDelta > 0 ? '+' : ''}{log.satisfactionDelta}
                    </span>
                  )}
                  {log.pleasureDelta !== 0 && (
                    <span className={log.pleasureDelta > 0 ? 'delta-negative' : 'delta-positive'}>
                      쾌감 {log.pleasureDelta > 0 ? '+' : ''}{log.pleasureDelta}
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>

          {lastLog && (
            <div className="battle-hint">클릭하여 다음 턴 진행</div>
          )}
        </div>
      </div>
    )
  }

  // ── Choice Phase: Pick 1 of 3 cards ──
  if (phase === 'choice') {
    return (
      <div className="screen battle-screen">
        <div className="battle-container">
          <h2 className="battle-title">{isFreeMatch ? '📡 라이브 배틀' : '평가전'} vs {rivalName}</h2>
          <div className="battle-turn-indicator">턴 {battleTurn} / {maxBattleTurns} — 작전 선택!</div>

          <div className="battle-gauges">
            <ConditionGauge label="만족도 (승리)" value={satisfaction} color="#27ae60" />
            <ConditionGauge label="쾌감 (패배)" value={pleasure} color="#e74c3c" />
          </div>

          <div className="battle-cards">
            {drawnCards.map(card => (
              <button
                key={card.id}
                className="battle-card"
                onClick={() => {
                  const sound = getBattleActionSound(card.id)
                  if (sound) playSound(sound)
                  selectBattleAction(card)
                }}
              >
                <span className="battle-card-emoji">{card.emoji}</span>
                <span className="battle-card-name">{card.name}</span>
                <span className="battle-card-desc">{card.description}</span>
                <div className="battle-card-effects">
                  {card.satisfactionEffect > 0 && (
                    <span className="delta-positive">만족 +{card.satisfactionEffect}</span>
                  )}
                  {card.pleasureEffect < 0 && (
                    <span className="delta-positive">쾌감 {card.pleasureEffect}</span>
                  )}
                  {card.pleasureEffect > 0 && (
                    <span className="delta-negative">쾌감 +{card.pleasureEffect}</span>
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="battle-log battle-log-compact">
            {turnLogs.slice(-3).map((log, i) => (
              <div key={i} className={`battle-log-entry ${log.isPlayerAction ? 'battle-log-player' : ''}`}>
                <span className="battle-log-turn">T{log.turn}</span>
                <span className="battle-log-text">{log.narration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // ── Result Phase ──
  if (phase === 'result') {
    const resultConfig = {
      win: { emoji: '🏆', label: '승리!', className: 'battle-result-win', desc: battleResultTexts.win.desc },
      draw: { emoji: '🤝', label: '무승부', className: 'battle-result-draw', desc: battleResultTexts.draw.desc },
      lose: { emoji: '💔', label: '패배...', className: 'battle-result-lose', desc: battleResultTexts.lose.desc },
    }
    const cfg = resultConfig[resultType ?? 'lose']

    return (
      <div className="screen battle-screen">
        <div className="battle-container">
          <div className={`battle-result-banner ${cfg.className}`}>
            <span className="battle-result-emoji">{cfg.emoji}</span>
            <span className="battle-result-label">{cfg.label}</span>
            <span className="battle-result-rival">vs {rivalName}</span>
          </div>

          <div className="battle-gauges">
            <ConditionGauge label="만족도 (승리)" value={satisfaction} color="#27ae60" />
            <ConditionGauge label="쾌감 (패배)" value={pleasure} color="#e74c3c" />
          </div>

          <div className="battle-reward">{cfg.desc}</div>
          {fanReward > 0 && (
            <div className="battle-fan-reward">
              📺 팬 +{(
                resultType === 'win' ? fanReward :
                resultType === 'draw' ? Math.round(fanReward * (isFreeMatch ? 0.3 : 0.5)) :
                isFreeMatch ? 0 : Math.round(fanReward * 0.2)
              ).toLocaleString()}
            </div>
          )}

          <div className="battle-log battle-log-compact">
            {turnLogs.map((log, i) => (
              <div key={i} className={`battle-log-entry ${log.isPlayerAction ? 'battle-log-player' : ''}`}>
                <span className="battle-log-turn">T{log.turn}</span>
                <span className="battle-log-text">{log.narration}</span>
              </div>
            ))}
          </div>

          <button className="btn btn-primary" onClick={finishBattle}>
            계속하기
          </button>
        </div>
      </div>
    )
  }

  return null
}
