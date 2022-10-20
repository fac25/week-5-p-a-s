import "./App.css"
import Piano from "./components/Piano.jsx"
import { useState } from "react"

function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const [score, setScore] = useState(0)

  function toggleGame() {
    setGameStarted((prevState) => !prevState)
    setScore(0)
  }

  return (
    <div>
      {gameStarted && <h1>Keys Pressed {score} Times</h1>}
      <button onClick={toggleGame}>
        {gameStarted ? "Stop" : "Start"} Game
      </button>
      <Piano setScore={setScore} />
    </div>
  )
}

export default App
