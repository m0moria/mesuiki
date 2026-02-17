interface Props {
  label: string
  value: number
  color: string
}

export default function ConditionGauge({ label, value, color }: Props) {
  return (
    <div className="gauge-container">
      <div className="gauge-label">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="gauge-track">
        <div
          className="gauge-fill"
          style={{ width: `${value}%`, background: color }}
        />
      </div>
    </div>
  )
}
