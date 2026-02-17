import { useState, useEffect } from 'react'

interface Props {
  text: string
  speed?: number
  onComplete?: () => void
  skip?: boolean
}

export default function TypeWriter({ text, speed = 30, onComplete, skip = false }: Props) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (skip) {
      setDisplayed(text)
      setDone(true)
      onComplete?.()
      return
    }

    setDisplayed('')
    setDone(false)
    let i = 0
    const timer = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(timer)
        setDone(true)
        onComplete?.()
      }
    }, speed)
    return () => clearInterval(timer)
  }, [text, speed, onComplete, skip])

  return (
    <div className="typewriter">
      {displayed.split('\n').map((line, i) => (
        <p key={i}>{line || '\u00A0'}</p>
      ))}
      {!done && <span className="typewriter-cursor">▌</span>}
    </div>
  )
}
