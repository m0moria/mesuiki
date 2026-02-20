import { useState } from 'react'
import { useGameStore, loadArchives } from '../stores/gameStore'
import { StellaArchive, StatKey } from '../types/game'

const STAT_LABELS: Record<StatKey, string> = {
  libido: '연심',
  technique: '기교',
  capacity: '수용',
  endurance: '인내',
  charm: '매혹',
}

const MAX_SELECT = 2

export default function InheritanceSelect() {
  const { selectInheritance, heroine } = useGameStore()
  const archives = loadArchives()
  const [selected, setSelected] = useState<string[]>([])
  const [showFlash, setShowFlash] = useState(false)
  const [resultMsg, setResultMsg] = useState('')

  const toggleArchive = (id: string) => {
    setSelected(prev => {
      if (prev.includes(id)) return prev.filter(x => x !== id)
      if (prev.length >= MAX_SELECT) return prev
      return [...prev, id]
    })
  }

  const handleConfirm = () => {
    const selectedArchives = archives.filter(a => selected.includes(a.id))
    if (selectedArchives.length > 0) {
      setShowFlash(true)
      setResultMsg('뷰루루루♡ 인자가 자궁에 각인되었습니다… 배가 볼록해지며 정액 역류 + 시오후키 분출')
      setTimeout(() => {
        setShowFlash(false)
        selectInheritance(selectedArchives)
      }, 2000)
    } else {
      selectInheritance(selectedArchives)
    }
  }

  const handleSkip = () => {
    selectInheritance([])
  }

  if (archives.length === 0) {
    // No archives — skip directly
    return (
      <div className="screen inheritance-screen">
        <div className="inheritance-container">
          <h2 className="screen-title">스텔라 아카이브</h2>
          <p className="screen-subtitle">인자 주입 — 자궁 각인 의식</p>
          <div className="inheritance-empty">
            <p>아직 등록된 아카이브가 없습니다.</p>
            <p className="inheritance-hint">C랭크 이상으로 게임을 클리어하면 아카이브가 생성됩니다.</p>
          </div>
          <button className="btn btn-primary" onClick={handleSkip}>
            계속하기
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="screen inheritance-screen">
      {showFlash && <div className="inherit-flash" />}
      <div className="inheritance-container">
        <h2 className="screen-title">스텔라 아카이브</h2>
        <p className="screen-subtitle">인자 주입 — 자궁 각인 의식 (최대 {MAX_SELECT}개 선택)</p>
        <p className="inheritance-heroine">현재 히로인: {heroine?.portrait} {heroine?.name}</p>

        {resultMsg && (
          <div className="inherit-result-msg">{resultMsg}</div>
        )}

        <div className="archive-cards">
          {archives.map((archive: StellaArchive) => (
            <button
              key={archive.id}
              className={`archive-card ${selected.includes(archive.id) ? 'archive-card-selected' : ''}`}
              onClick={() => toggleArchive(archive.id)}
            >
              <div className="archive-card-header">
                <span className="archive-rank archive-rank-{archive.rank}">{archive.rank}</span>
                <span className="archive-name">{archive.heroineName}</span>
              </div>
              <div className="archive-bonus">
                보너스: {STAT_LABELS[archive.bonusStat]} +{archive.bonusPercent}%
              </div>
              <div className="archive-skill">{archive.skillName}</div>
              {selected.includes(archive.id) && (
                <div className="archive-check">✓</div>
              )}
            </button>
          ))}
        </div>

        <div className="inheritance-footer">
          <span className="inheritance-count">{selected.length} / {MAX_SELECT}</span>
          <button className="btn btn-secondary" onClick={handleSkip}>
            건너뛰기
          </button>
          <button className="btn btn-primary" onClick={handleConfirm}>
            인자 주입 개시
          </button>
        </div>
      </div>
    </div>
  )
}
