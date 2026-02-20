import { useGameStore } from './stores/gameStore'
import { GameScene } from './types/game'
import TitleScreen from './components/TitleScreen'
import HeroineSelect from './components/HeroineSelect'
import InheritanceSelect from './components/InheritanceSelect'
import SupportSelect from './components/SupportSelect'
import TrainingMain from './components/TrainingMain'
import EventScene from './components/EventScene'
import ResultScreen from './components/ResultScreen'
import BattleScene from './components/BattleScene'

export default function App() {
  const scene = useGameStore(s => s.scene)

  const renderScene = () => {
    switch (scene) {
      case GameScene.Title:
        return <TitleScreen />
      case GameScene.HeroineSelect:
        return <HeroineSelect />
      case GameScene.InheritanceSelect:
        return <InheritanceSelect />
      case GameScene.SupportSelect:
        return <SupportSelect />
      case GameScene.Training:
        return <TrainingMain />
      case GameScene.Event:
        return <EventScene />
      case GameScene.Result:
        return <ResultScreen />
      case GameScene.Battle:
        return <BattleScene />
    }
  }

  return (
    <div className="app">
      <div className="scene-wrapper" key={scene}>
        {renderScene()}
      </div>
    </div>
  )
}
