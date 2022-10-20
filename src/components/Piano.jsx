import Key from "./Key"
import { useEffect, useState } from "react"
import { NOTES, keyMap, songs } from "./constants"

const Piano = ({ setScore }) => {
  const [selectedNote, setSelectedNote] = useState("")

  function handleKeyDown(event) {
    const userInput = event.key.toLowerCase()
    for (let key in keyMap) {
      if (userInput === key) {
        setSelectedNote(keyMap[userInput])
        setScore((currentScore) => currentScore + 1)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  useEffect(playAudio, [selectedNote])

  function playAudio() {
    if (!selectedNote) return

    const noteAudio = new Audio()
    noteAudio.src = `assets/Notes/${selectedNote}.mp3`
    noteAudio.play()
  }

  function playSequence() {
    let time = 0
    for (let i = 0; i <= 1; i++) {
      setTimeout(
        () =>
          window.dispatchEvent(
            new KeyboardEvent("keydown", { key: songs[0][i] })
          ),
        time
      )
      time += 1500
    }
  }

  return (
    <div className="piano" onClick={playSequence}>
      {/* <audio src={`assets/Notes/${selectedNote}.mp3`}></audio> */}
      {NOTES.map((note, index) => (
        <Key key={`key-${index}`} note={note} selectedNote={selectedNote} />
      ))}
    </div>
  )
}

export default Piano
