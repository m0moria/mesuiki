interface Props {
  value: number
  label?: string
}

export default function CorruptionBar({ value, label = '타락 진행도' }: Props) {
  // Total of all 5 stats averaged as "corruption progress"
  const color =
    value < 30
      ? 'linear-gradient(90deg, #4a90d9, #6ab0f3)'
      : value < 60
        ? 'linear-gradient(90deg, #d94a8a, #f06abc)'
        : 'linear-gradient(90deg, #c0392b, #e74c3c)'

  return (
    <div className="gauge-container">
      <div className="gauge-label">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="gauge-track">
        <div
          className="gauge-fill corruption-fill"
          style={{ width: `${value}%`, background: color }}
        />
      </div>
    </div>
  )
}
