interface Choice {
  text: string
}

interface Props {
  choices: Choice[]
  onSelect: (index: number) => void
}

export default function ChoicePanel({ choices, onSelect }: Props) {
  return (
    <div className="choice-panel">
      {choices.map((choice, i) => (
        <button key={i} className="choice-btn" onClick={() => onSelect(i)}>
          <span className="choice-number">{i + 1}</span>
          <span className="choice-text">{choice.text}</span>
        </button>
      ))}
    </div>
  )
}
