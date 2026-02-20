import { SupportCard } from '../../types/game'
import { supportPortrait } from '../../data/images'

interface Props {
  card: SupportCard
  bond: number
}

function getBondColor(bond: number): string {
  if (bond >= 80) return '#ff69b4'  // Pink
  if (bond >= 60) return '#ff8c00'  // Orange
  if (bond >= 20) return '#27ae60'  // Green
  return '#3498db'                   // Blue
}

function getBondLabel(bond: number): string {
  if (bond >= 80) return '암컷 타락'
  if (bond >= 60) return '욕구불만'
  if (bond >= 20) return '호기심'
  return '경계'
}

export default function BondGauge({ card, bond }: Props) {
  const color = getBondColor(bond)
  const isMax = bond >= 80
  const imgSrc = supportPortrait[card.id]

  return (
    <div className={`bond-gauge-item ${isMax ? 'bond-gauge-max' : ''}`}>
      <div className="bond-gauge-avatar">
        {imgSrc ? (
          <img src={imgSrc} alt={card.characterName} className="bond-gauge-img" />
        ) : (
          <span className="bond-gauge-emoji">{card.portrait}</span>
        )}
      </div>
      <div className="bond-gauge-info">
        <div className="bond-gauge-name-row">
          <span className="bond-gauge-name">{card.characterName.split(' ').pop()}</span>
          <span className="bond-gauge-value" style={{ color }}>{Math.round(bond)}%</span>
        </div>
        <div className="bond-gauge-track">
          <div
            className="bond-gauge-fill"
            style={{ width: `${bond}%`, background: color }}
          />
        </div>
        <span className="bond-gauge-label" style={{ color }}>{getBondLabel(bond)}</span>
      </div>
      {isMax && <span className="bond-gauge-heart">♥</span>}
    </div>
  )
}
