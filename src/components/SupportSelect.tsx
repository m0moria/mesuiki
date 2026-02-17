import { useState } from 'react'
import { useGameStore } from '../stores/gameStore'
import { supportCards } from '../data/supportCards'
import { SupportCard } from '../types/game'

const MAX_SUPPORT = 3

export default function SupportSelect() {
  const { heroine, selectSupportCards } = useGameStore()
  const [selected, setSelected] = useState<string[]>([])

  const toggleCard = (cardId: string) => {
    setSelected(prev => {
      if (prev.includes(cardId)) return prev.filter(id => id !== cardId)
      if (prev.length >= MAX_SUPPORT) return prev
      return [...prev, cardId]
    })
  }

  const handleConfirm = () => {
    const cards: SupportCard[] = selected.map(id => supportCards.find(c => c.id === id)!)
    selectSupportCards(cards)
  }

  return (
    <div className="screen support-select-screen">
      <h2 className="screen-title">서포트 카드 편성</h2>
      <p className="screen-subtitle">
        {heroine?.name}의 육성을 도울 서포트 카드를 {MAX_SUPPORT}장 선택하세요
      </p>

      <div className="support-cards-grid">
        {supportCards.map(card => {
          const isSelected = selected.includes(card.id)
          return (
            <button
              key={card.id}
              className={`support-card ${isSelected ? 'support-card-selected' : ''}`}
              onClick={() => toggleCard(card.id)}
            >
              <div className="support-card-header">
                <span className="support-card-portrait">{card.portrait}</span>
                <span className="support-card-rarity">{card.rarity}</span>
              </div>
              <h3 className="support-card-name">{card.characterName}</h3>
              <p className="support-card-title">{card.cardName}</p>
              <p className="support-card-flavor">{card.flavorText}</p>
              <div className="support-card-bonuses">
                {card.trainingBonus.map((b, i) => (
                  <span key={i} className="support-bonus-tag">
                    {b.stat} +{b.percent}%
                  </span>
                ))}
              </div>
              <div className="support-card-skill">
                <span className="support-skill-name">{card.skillName}</span>
                <span className="support-skill-desc">{card.skillDesc}</span>
              </div>
              {isSelected && <div className="support-card-check">✓</div>}
            </button>
          )
        })}
      </div>

      <div className="support-select-footer">
        <span className="support-select-count">{selected.length} / {MAX_SUPPORT}</span>
        <button
          className="btn btn-primary"
          disabled={selected.length === 0}
          onClick={handleConfirm}
        >
          육성 시작
        </button>
      </div>
    </div>
  )
}
