import Key from "./Key"
import { useEffect, useState } from "react"
import { NOTES, keyMap, songs } from "./constants"
import {
  isUserSequenceCorrect,
  playAudio,
  validateUserInput,
  styleKey
} from "./helpers"

const Piano = ({ gameStarted, setScore, setResultMessage }) => {
  const [selectedNote, setSelectedNote] = useState("")
  const [userInputArr, setUserInputArr] = useState([])
  const [sequenceCount, setSequenceCount] = useState(0)

  function handleKeyDown(event) {
    const userInput = event.key.toLowerCase()
    const userNote = keyMap[userInput]
    if (!userNote) return
    styleKey(userNote)
    playAudio(userNote)

    if (!gameStarted) return
    validateUserInput({
      setScore,
      sequenceCount,
      userNote,
      setUserInputArr,
      setSequenceCount,
      setResultMessage
    })
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [gameStarted, sequenceCount])

  useEffect(() => playAudio(selectedNote), [selectedNote])
  useEffect(() => isUserSequenceCorrect(userInputArr, setResultMessage))

  return (
    <div className="piano">
      <audio src={`assets/Notes/${selectedNote}.mp3`}></audio>
      {/* {NOTES.map((note, index) => (
        <Key
          key={`key-${index}`}
          note={note}
          selectedNote={selectedNote}
          keyMap={keyMap}
        />
      ))} */}
      {/* <audio src={`assets/Notes/${selectedNote}.mp3`}></audio> */}
      {Object.keys(keyMap).map((note, index) => (
        <Key
          key={`key-${index}`}
          note={keyMap[note]}
          selectedNote={selectedNote}
          letter={note}
        />
      ))}
    </div>
  )
}

export default Piano
