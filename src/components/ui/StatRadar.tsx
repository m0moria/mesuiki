import { Stats, StatKey, STAT_MAX } from '../../types/game'

interface Props {
  stats: Stats
}

const SIZE = 220
const CENTER = SIZE / 2
const RADIUS = 80

const LABELS: { key: StatKey; label: string; angle: number }[] = [
  { key: 'libido',    label: '연심', angle: -90 },
  { key: 'technique', label: '기교', angle: -18 },
  { key: 'capacity',  label: '수용', angle: 54 },
  { key: 'endurance', label: '인내', angle: 126 },
  { key: 'charm',     label: '매혹', angle: 198 },
]

function polarToCart(angleDeg: number, r: number) {
  const rad = (angleDeg * Math.PI) / 180
  return { x: CENTER + r * Math.cos(rad), y: CENTER + r * Math.sin(rad) }
}

export default function StatRadar({ stats }: Props) {
  const gridLevels = [0.25, 0.5, 0.75, 1.0]
  const axes = LABELS.map(l => polarToCart(l.angle, RADIUS))

  const dataPoints = LABELS.map(l => {
    const val = Math.min(stats[l.key] / STAT_MAX, 1)
    return polarToCart(l.angle, RADIUS * val)
  })
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ') + ' Z'

  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="stat-radar" width={SIZE} height={SIZE}>
      {/* Grid pentagons */}
      {gridLevels.map(level => {
        const pts = LABELS.map(l => polarToCart(l.angle, RADIUS * level))
        const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ') + ' Z'
        return <path key={level} d={path} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      })}

      {/* Axes */}
      {axes.map((p, i) => (
        <line key={i} x1={CENTER} y1={CENTER} x2={p.x} y2={p.y} stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      ))}

      {/* Data fill */}
      <path d={dataPath} fill="rgba(220,50,80,0.25)" stroke="#dc3250" strokeWidth="2" />
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="3.5" fill="#dc3250" />
      ))}

      {/* Labels */}
      {LABELS.map(l => {
        const pos = polarToCart(l.angle, RADIUS + 24)
        return (
          <text
            key={l.key}
            x={pos.x}
            y={pos.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#aaa"
            fontSize="11"
            fontFamily="'Noto Sans KR', sans-serif"
          >
            {l.label} {stats[l.key]}
          </text>
        )
      })}
    </svg>
  )
}
