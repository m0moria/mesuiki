import { useState, useCallback } from 'react'
import { useGameStore } from '../stores/gameStore'
import TypeWriter from './ui/TypeWriter'
import ChoicePanel from './ui/ChoicePanel'

export default function EventScene() {
  const { currentEvent, makeChoice, dismissEvent } = useGameStore()
  const [phase, setPhase] = useState<'text' | 'choice' | 'result'>('text')
  const [resultText, setResultText] = useState('')

  const handleTextComplete = useCallback(() => {
    // text done — choices are already shown
  }, [])

  if (!currentEvent) return null

  const handleChoice = (index: number) => {
    const choice = currentEvent.choices[index]
    makeChoice(choice)
    setResultText(choice.followUpText)
    setPhase('result')
  }

  const handleDismiss = () => {
    setPhase('text')
    setResultText('')
    dismissEvent()
  }

  return (
    <div className="screen event-screen">
      <div className="event-container">
        <h2 className="event-title">{currentEvent.title}</h2>

        {phase === 'text' && (
          <>
            <div className="event-text">
              <TypeWriter
                text={currentEvent.text}
                speed={25}
                onComplete={handleTextComplete}
              />
            </div>
            <ChoicePanel choices={currentEvent.choices} onSelect={handleChoice} />
          </>
        )}

        {phase === 'result' && (
          <>
            <div className="event-text">
              <TypeWriter text={resultText} speed={25} />
            </div>
            <button className="btn btn-primary event-continue" onClick={handleDismiss}>
              계속하기
            </button>
          </>
        )}
      </div>
    </div>
  )
}
