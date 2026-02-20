import { useState, useEffect } from 'react'
import { useGameStore } from '../stores/gameStore'
import { LastTrainingResult, StatKey } from '../types/game'
import { playSound, playSoundDelayed, stopAllSounds, getTrainingSound } from '../utils/sound'

const STAT_LABELS: Record<StatKey, string> = {
  libido: '연심',
  technique: '기교',
  capacity: '수용',
  endurance: '인내',
  charm: '매혹',
}

const RESULT_CONFIG = {
  excellent: { label: '대성공!', className: 'result-excellent', emoji: '💦🍆' },
  success: { label: '성공', className: 'result-success', emoji: '♡♡' },
  fail: { label: '실패', className: 'result-fail', emoji: '😢' },
  catastrophe: { label: '대실패!', className: 'result-catastrophe', emoji: '⚡' },
}

const ONOMATOPOEIA: Record<string, string> = {
  excellent: '즈뿌우우우♡♡ 선생님 자지가 자궁구를 뻥 뚫었어요! 정액 쥬루룻♡♡ 보지가 시오후키 터져요!',
  success: '쿵쿵♡ 안쪽이 쫙 조여들어요♡',
  fail: '…찔끔. 아직 몸이 안 열려요…',
  catastrophe: '비릿…! 아… 아파요… 찢어질 것 같아…!',
}

function CumOverflowEffect() {
  const drops = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 1.5}s`,
    size: 6 + Math.random() * 8,
  }))

  return (
    <div className="cum-overflow">
      {drops.map(d => (
        <div
          key={d.id}
          className="cum-drop"
          style={{
            left: d.left,
            animationDelay: d.delay,
            width: `${d.size}px`,
            height: `${d.size * 1.6}px`,
          }}
        />
      ))}
    </div>
  )
}

interface Props {
  result: LastTrainingResult
  onDismiss: () => void
}

export default function TrainingResultOverlay({ result, onDismiss }: Props) {
  const { supportCards } = useGameStore()
  const config = RESULT_CONFIG[result.result]
  const isFriendship = result.friendshipBonus

  const [showFlash, setShowFlash] = useState(result.result === 'excellent')
  const [showShake, setShowShake] = useState(result.result === 'catastrophe')

  useEffect(() => {
    if (showFlash) {
      const t = setTimeout(() => setShowFlash(false), 800)
      return () => clearTimeout(t)
    }
  }, [showFlash])

  useEffect(() => {
    if (showShake) {
      const t = setTimeout(() => setShowShake(false), 600)
      return () => clearTimeout(t)
    }
  }, [showShake])

  // Sound effect on mount
  useEffect(() => {
    if (result.result === 'success' || result.result === 'excellent') {
      const soundCat = getTrainingSound(result.trainingId)
      if (soundCat) {
        playSound(soundCat)
        if (result.result === 'excellent') {
          playSoundDelayed('creampie', 1500)
        }
      }
    }
    return () => stopAllSounds()
  }, [result.trainingId, result.result])

  const statEntries = Object.entries(result.statChanges).filter(([, v]) => v !== 0) as [StatKey, number][]
  const condEntries = Object.entries(result.conditionChanges).filter(([, v]) => v !== 0) as [string, number][]

  // Bond changes
  const bondEntries = result.bondChanges
    ? Object.entries(result.bondChanges).filter(([, v]) => v > 0)
    : []

  // successText/failText from training data
  const flavorText = result.result === 'excellent' || result.result === 'success'
    ? result.successText
    : result.result === 'fail' || result.result === 'catastrophe'
    ? result.failText
    : undefined

  const showCumOverflow = result.result === 'excellent'

  return (
    <>
      {showFlash && <div className="climax-flash" />}
      {showCumOverflow && <CumOverflowEffect />}
      <div
        className={`training-result-overlay ${config.className} ${isFriendship ? 'result-friendship' : ''} ${showShake ? 'screen-shake' : ''}`}
        onClick={onDismiss}
      >
        <div className={`training-result-card ${isFriendship ? 'training-result-card-friendship' : ''}`}>
          {isFriendship && (
            <div className="friendship-result-banner">우정 트레이닝!</div>
          )}
          <div className="training-result-emoji">{isFriendship ? '💕' : config.emoji}</div>

          {/* Onomatopoeia */}
          <div className="training-result-onomatopoeia">
            {ONOMATOPOEIA[result.result]}
          </div>

          <div className="training-result-label">{config.label}</div>
          <div className="training-result-name">{result.trainingName}</div>

          {/* Flavor text (successText / failText) */}
          {flavorText && (
            <div className="training-result-flavor">{flavorText}</div>
          )}

          {statEntries.length > 0 && (
            <div className="training-result-changes">
              {statEntries.map(([stat, value]) => (
                <div key={stat} className={`result-change ${value > 0 ? 'change-positive' : 'change-negative'}`}>
                  {STAT_LABELS[stat]} {value > 0 ? '+' : ''}{value}
                </div>
              ))}
            </div>
          )}

          {condEntries.length > 0 && (
            <div className="training-result-changes">
              {condEntries.map(([cond, value]) => (
                <div key={cond} className={`result-change ${value > 0 ? 'change-positive' : 'change-negative'}`}>
                  {cond === 'stamina' ? '체력' : '정신력'} {value > 0 ? '+' : ''}{value}
                </div>
              ))}
            </div>
          )}

          {bondEntries.length > 0 && (
            <div className="training-result-bonds">
              {bondEntries.map(([cardId, value]) => {
                const card = supportCards.find(c => c.id === cardId)
                const name = card?.characterName.split(' ').pop() ?? cardId
                return (
                  <div key={cardId} className="result-bond-change">
                    {name} 인연 +{value}
                  </div>
                )
              })}
            </div>
          )}

          <div className="training-result-hint">클릭하여 계속</div>
        </div>
      </div>
    </>
  )
}
