import "./App.css"
import Piano from "./components/Piano.jsx"
import { useEffect, useState } from "react"
import { playSequence } from "./components/helpers"

function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const [score, setScore] = useState(0)

  const pianoProps = {
    gameStarted,
    setScore
  }

  function toggleGame() {
    setGameStarted((prevState) => !prevState)
    setScore(0)
  }

  useEffect(() => {
    if (gameStarted) playSequence()
  }, [gameStarted])

  return (
    <div>
      {gameStarted && <h1>Keys Pressed {score} Times</h1>}
      <button onClick={toggleGame}>
        {gameStarted ? "Stop" : "Start"} Game
      </button>
      <Piano {...pianoProps} />
    </div>
  )
}

export default App
