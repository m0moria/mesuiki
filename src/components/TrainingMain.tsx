import { useGameStore, getPhase, getTrainingProbabilities } from '../stores/gameStore'
import { STAT_MAX, StatKey, ConditionStatus, TrainingOption, FanRank } from '../types/game'
import { trainings } from '../data/trainings'
import { trainingsReona } from '../data/trainings_reona'
import { heroineStanding, supportPortrait } from '../data/images'
import StatList from './ui/StatList'
import BondGauge from './ui/BondGauge'
import ConditionGauge from './ui/ConditionGauge'
import TurnCounter from './ui/TurnCounter'
import TrainingResultOverlay from './TrainingResultOverlay'
import SkillShop from './SkillShop'
import { getSkillById } from '../data/skills'

const PHASE_LABELS: Record<string, string> = {
  spring: '봄 — 싹트는 욕망',
  summer: '여름 — 뜨거운 일탈',
  fall: '가을 — 깊어지는 타락',
  winter: '겨울 — 완성형 암컷',
}

const CONDITION_LABELS: Record<ConditionStatus, { text: string; className: string }> = {
  inHeat: { text: '🔥 절호조', className: 'condition-badge-inHeat' },
  normal: { text: '● 보통', className: 'condition-badge-normal' },
  frigid: { text: '❄️ 최악', className: 'condition-badge-frigid' },
  trainPhobia: { text: '⚠️ 훈련 공포증', className: 'condition-badge-phobia' },
}

const STAT_LABELS: Record<StatKey, string> = {
  libido: '연심',
  technique: '기교',
  capacity: '수용',
  endurance: '인내',
  charm: '매혹',
}

const FAN_RANK_INFO: Record<FanRank, { label: string; className: string }> = {
  underground: { label: '📹 지하 아이돌', className: 'fan-rank-underground' },
  rising: { label: '📺 라이징 섹스 심볼', className: 'fan-rank-rising' },
  national: { label: '🏆 국민 오나홀', className: 'fan-rank-national' },
  worldclass: { label: '🌍 월드 클래스 빗치', className: 'fan-rank-worldclass' },
}

function getFanRank(fanCount: number): FanRank {
  if (fanCount >= 50000) return 'worldclass'
  if (fanCount >= 10000) return 'national'
  if (fanCount >= 1000) return 'rising'
  return 'underground'
}

function StatEffectPreview({ training }: { training: TrainingOption }) {
  return (
    <div className="training-stat-preview">
      {training.statEffects.map(e => (
        <span key={e.stat} className="stat-effect-tag stat-effect-positive">
          {STAT_LABELS[e.stat]} +{e.min}~{e.max}
        </span>
      ))}
      {training.conditionEffects.map(e => (
        <span key={e.condition} className={`stat-effect-tag ${e.value >= 0 ? 'stat-effect-positive' : 'stat-effect-negative'}`}>
          {e.condition === 'stamina' ? '체력' : '정신력'} {e.value > 0 ? '+' : ''}{e.value}
        </span>
      ))}
    </div>
  )
}

export default function TrainingMain() {
  const {
    stats, condition, turn, maxTurns, heroine, lust, conditionStatus,
    selectTraining, showTrainingResult, lastTrainingResult, dismissTrainingResult,
    supportCards, bondGauges, supportCardPlacements,
    skillPoints, equippedSkills, showSkillShop, openSkillShop,
    fanCount, startFreeBattle,
  } = useGameStore()
  const phase = getPhase(turn)

  const avgStat = (stats.libido + stats.technique + stats.capacity + stats.endurance + stats.charm) / 5
  const corruptionProgress = Math.round((avgStat / STAT_MAX) * 100)

  const heroineTrainings = heroine?.id === 'leona' ? trainingsReona : trainings
  const availableTrainings = heroineTrainings.filter(t => {
    if (t.unlockTurn && turn < t.unlockTurn) return false
    if (t.unlockStat && stats[t.unlockStat.stat] < t.unlockStat.value) return false
    return true
  })

  const isPhobiaBlocked = conditionStatus === 'trainPhobia'
  const condLabel = CONDITION_LABELS[conditionStatus]

  // 히로인 스탠딩 이미지
  const standingImg = heroine ? heroineStanding[heroine.id] : null

  // 우정 트레이닝 가능 여부 체크 (훈련별)
  // 훈련 확률 계산
  const probabilities = getTrainingProbabilities(condition.stamina, condition.mental, lust, conditionStatus)

  // 해당 훈련에 배치된 카드 조회
  const getPlacedCards = (training: TrainingOption) => {
    const primaryStat = training.statEffects.length > 0 ? training.statEffects[0].stat : null
    if (!primaryStat) return []
    return supportCards.filter(card => supportCardPlacements[card.id] === primaryStat)
  }

  const getFriendshipInfo = (training: TrainingOption) => {
    const primaryStat = training.statEffects.length > 0 ? training.statEffects[0].stat : null
    if (!primaryStat) return null
    const friendCards = supportCards.filter(
      card => (bondGauges[card.id] ?? 0) >= 80 && supportCardPlacements[card.id] === primaryStat
    )
    return friendCards.length > 0 ? friendCards : null
  }

  const isHeatActive = conditionStatus === 'inHeat'
  const isLustHigh = lust > 70

  return (
    <div className={`screen training-screen ${isHeatActive ? 'heat-active' : ''} ${isLustHigh ? 'lust-high' : ''}`}>
      {/* Training Result Overlay */}
      {showTrainingResult && lastTrainingResult && (
        <TrainingResultOverlay
          result={lastTrainingResult}
          onDismiss={dismissTrainingResult}
        />
      )}

      {/* Header */}
      <div className="training-header">
        <div className="training-header-left">
          <ConditionGauge label="LP" value={lust} color="#e74c3c" />
        </div>
        <div className="training-header-center">
          <span className={`condition-badge ${condLabel.className}`}>{condLabel.text}</span>
          {isHeatActive && <span className="heat-bonus-tag">발정 효율 +20%</span>}
          <span className="heroine-badge-phase">{PHASE_LABELS[phase]}</span>
        </div>
        <div className="training-header-right">
          <TurnCounter current={turn} max={maxTurns} />
        </div>
      </div>

      <div className="training-body three-panel">
        {/* Left panel — Stats */}
        <div className="panel stats-panel">
          <h3 className="panel-title">스테이터스</h3>
          <StatList stats={stats} />
          <div className="gauges">
            <ConditionGauge label="체력" value={condition.stamina} color="#27ae60" />
            <ConditionGauge label="정신력" value={condition.mental} color="#8e44ad" />
            <ConditionGauge label="LP (성욕)" value={lust} color="#e74c3c" />
            <div className="gauge-container">
              <div className="gauge-label">
                <span>타락도</span>
                <span>{corruptionProgress}%</span>
              </div>
              <div className="gauge-track">
                <div
                  className="gauge-fill corruption-fill"
                  style={{
                    width: `${corruptionProgress}%`,
                    background: `linear-gradient(90deg, var(--accent), #ff69b4)`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Fan Count Display */}
          <div className={`fan-count-display ${FAN_RANK_INFO[getFanRank(fanCount)].className}`}>
            <span className="fan-count-label">📺 팬 수</span>
            <span className="fan-count-value">{fanCount.toLocaleString()}</span>
            <span className="fan-rank-badge">{FAN_RANK_INFO[getFanRank(fanCount)].label}</span>
          </div>

          {/* Skill Shop Button + Equipped Skills */}
          <button className="btn-skill-shop" onClick={openSkillShop}>
            🎯 스킬 상점 (SP: {skillPoints})
          </button>
          {equippedSkills.length > 0 && (
            <div className="equipped-skills-mini">
              {equippedSkills.map(id => {
                const sk = getSkillById(id)
                return sk ? (
                  <span key={id} className={`equipped-mini-icon skill-grade-${sk.grade}`} title={sk.name}>{sk.emoji}</span>
                ) : null
              })}
            </div>
          )}
        </div>

        {/* Center panel — Character Illustration */}
        <div className="panel center-panel">
          <div className="character-display">
            {standingImg ? (
              <img src={standingImg} alt={heroine?.name} className={`character-standing ${isHeatActive ? 'heat-glow' : ''}`} />
            ) : (
              <div className="character-placeholder">
                <span className={`character-placeholder-emoji ${isHeatActive ? 'heat-glow' : ''}`}>{heroine?.portrait}</span>
              </div>
            )}
          </div>
          <div className="character-nameplate">
            <span className="character-nameplate-name">{heroine?.name}</span>
            <span className="character-nameplate-title">{heroine?.title}</span>
          </div>
        </div>

        {/* Right panel — Training + Bond */}
        <div className="panel training-panel">
          <h3 className="panel-title">조교 메뉴</h3>
          {isPhobiaBlocked && (
            <div className="phobia-warning">
              ⚠️ 훈련 공포증 — 휴식만 가능합니다
            </div>
          )}
          <div className="training-options">
            {availableTrainings.map(t => {
              const disabled = isPhobiaBlocked && t.id !== 'rest'
              const friendCards = getFriendshipInfo(t)
              const hasFriendship = !!friendCards
              const placedCards = getPlacedCards(t)
              const isTrainingStat = t.statEffects.length > 0 && t.id !== 'rest'
              return (
                <button
                  key={t.id}
                  className={`training-btn training-level-${t.level} ${disabled ? 'training-btn-disabled' : ''} ${hasFriendship ? 'training-btn-friendship' : ''}`}
                  onClick={() => !disabled && selectTraining(t)}
                  disabled={disabled}
                >
                  <span className="training-emoji">{t.emoji}</span>
                  <div className="training-info">
                    <div className="training-name-row">
                      <span className="training-name">{t.name}</span>
                      {t.level > 1 && <span className="training-level">Lv.{t.level}</span>}
                      {hasFriendship && <span className="friendship-badge">우정 트레이닝!</span>}
                    </div>
                    <StatEffectPreview training={t} />
                    {isTrainingStat && (
                      <div className="training-prob-tags">
                        <span className="prob-tag prob-excellent">대성공 {probabilities.excellent}%</span>
                        <span className="prob-tag prob-fail">실패 {probabilities.fail}%</span>
                        <span className="prob-tag prob-catastrophe">대실패 {probabilities.catastrophe}%</span>
                      </div>
                    )}
                    {placedCards.length > 0 && (
                      <div className="placement-portraits">
                        {placedCards.map(card => {
                          const img = supportPortrait[card.id]
                          const isFriend = (bondGauges[card.id] ?? 0) >= 80
                          return img ? (
                            <img key={card.id} src={img} alt={card.characterName} className={`placement-mini-portrait ${isFriend ? 'placement-mini-friendship' : ''}`} />
                          ) : (
                            <span key={card.id} className={`placement-mini-emoji ${isFriend ? 'placement-mini-friendship' : ''}`}>{card.portrait}</span>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Free Battle Button */}
          <button
            className={`btn-free-battle ${condition.stamina < 10 || condition.mental < 5 ? 'btn-free-battle-disabled' : ''}`}
            onClick={() => condition.stamina >= 10 && condition.mental >= 5 && startFreeBattle()}
            disabled={condition.stamina < 10 || condition.mental < 5}
          >
            <span className="free-battle-emoji">📡</span>
            <span className="free-battle-text">라이브 배틀</span>
            {condition.stamina < 10 || condition.mental < 5 ? (
              <span className="free-battle-cost">체력/정신력 부족</span>
            ) : (
              <span className="free-battle-cost">체력 -10 / 정신력 -5</span>
            )}
          </button>

          {/* Bond Gauges */}
          {supportCards.length > 0 && (
            <div className="bond-section">
              <h4 className="bond-section-title">인연 게이지</h4>
              {supportCards.map(card => (
                <BondGauge key={card.id} card={card} bond={bondGauges[card.id] ?? 0} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Skill Shop Overlay */}
      {showSkillShop && <SkillShop />}
    </div>
  )
}
