import "./App.css"
import Piano from "./components/Piano.jsx"
import { useEffect, useState } from "react"
import { playSequence } from "./components/helpers"

const App = () => {
  const [gameStarted, setGameStarted] = useState(false)
  const [score, setScore] = useState(0)
  const [resultMessage, setResultMessage] = useState("")

  const toggleGame = () => {
    setGameStarted((prevState) => !prevState)
    setScore(0)
  }

  useEffect(() => {
    if (gameStarted) playSequence()
  }, [gameStarted])

  return (
    <div>
      {gameStarted && <h1>Player score: {score}</h1>}
      {gameStarted && <h2>{resultMessage}</h2>}
      <button onClick={toggleGame}>
        {gameStarted ? "Stop" : "Start"} Game
      </button>

      <Piano
        gameStarted={gameStarted}
        setScore={setScore}
        setResultMessage={setResultMessage}
      />
    </div>
  )
}



export default App
