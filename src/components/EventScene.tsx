import { useState, useCallback, useEffect } from 'react'
import { useGameStore } from '../stores/gameStore'
import { DialogueLine } from '../types/game'
import TypeWriter from './ui/TypeWriter'
import ChoicePanel from './ui/ChoicePanel'

type Phase = 'script' | 'choice' | 'followup' | 'done'

export default function EventScene() {
  const { currentEvent, makeChoice, dismissEvent } = useGameStore()
  const [phase, setPhase] = useState<Phase>('script')
  const [lineIndex, setLineIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [followUpScript, setFollowUpScript] = useState<DialogueLine[]>([])

  // Reset state when event changes
  useEffect(() => {
    setPhase('script')
    setLineIndex(0)
    setIsTyping(true)
    setFollowUpScript([])
  }, [currentEvent?.id])

  const handleTypingComplete = useCallback(() => {
    setIsTyping(false)
  }, [])

  if (!currentEvent) return null

  const currentScript = phase === 'followup' ? followUpScript : currentEvent.script
  const currentLine = currentScript[lineIndex]

  const handleClick = () => {
    if (isTyping) {
      // Skip typing animation — handled by TypeWriter's skip
      setIsTyping(false)
      return
    }

    // Advance to next line
    if (lineIndex < currentScript.length - 1) {
      setLineIndex(lineIndex + 1)
      setIsTyping(true)
      return
    }

    // Script finished
    if (phase === 'script') {
      if (currentEvent.choices.length > 0) {
        setPhase('choice')
      } else {
        setPhase('done')
      }
    } else if (phase === 'followup') {
      setPhase('done')
    }
  }

  const handleChoice = (index: number) => {
    const choice = currentEvent.choices[index]
    makeChoice(choice)
    if (choice.followUpScript.length > 0) {
      setFollowUpScript(choice.followUpScript)
      setLineIndex(0)
      setIsTyping(true)
      setPhase('followup')
    } else {
      setPhase('done')
    }
  }

  const handleDismiss = () => {
    setPhase('script')
    setLineIndex(0)
    setIsTyping(true)
    setFollowUpScript([])
    dismissEvent()
  }

  // Determine speaker display style
  const getSpeakerClass = (line: DialogueLine) => {
    switch (line.type) {
      case 'narration': return 'vn-narration'
      case 'thought': return 'vn-thought'
      case 'action': return 'vn-action'
      default: return 'vn-dialogue'
    }
  }

  return (
    <div className="screen event-screen" onClick={phase === 'script' || phase === 'followup' ? handleClick : undefined}>
      <div className="event-container">
        <h2 className="event-title">{currentEvent.title}</h2>

        {(phase === 'script' || phase === 'followup') && currentLine && (
          <div className={`vn-textbox ${getSpeakerClass(currentLine)}`}>
            {currentLine.speaker && (
              <div className="vn-speaker">{currentLine.speaker}</div>
            )}
            <div className="vn-text">
              <TypeWriter
                key={`${phase}-${lineIndex}`}
                text={currentLine.text}
                speed={20}
                onComplete={handleTypingComplete}
                skip={!isTyping}
              />
            </div>
            {!isTyping && lineIndex < currentScript.length - 1 && (
              <div className="vn-next-indicator">▼</div>
            )}
          </div>
        )}

        {phase === 'choice' && (
          <div className="vn-choice-area">
            <ChoicePanel choices={currentEvent.choices} onSelect={handleChoice} />
          </div>
        )}

        {phase === 'done' && (
          <button className="btn btn-primary event-continue" onClick={handleDismiss}>
            계속하기
          </button>
        )}

        {/* Progress indicator */}
        {(phase === 'script' || phase === 'followup') && (
          <div className="vn-progress">
            {lineIndex + 1} / {currentScript.length}
          </div>
        )}
      </div>
    </div>
  )
}
