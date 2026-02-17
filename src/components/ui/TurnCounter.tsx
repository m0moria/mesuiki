interface Props {
  current: number
  max: number
}

export default function TurnCounter({ current, max }: Props) {
  return (
    <div className="turn-counter">
      <span className="turn-label">TURN</span>
      <span className="turn-value">{current}</span>
      <span className="turn-separator">/</span>
      <span className="turn-max">{max}</span>
    </div>
  )
}
