import Key from "./Key"
import { useEffect, useState } from "react"
import { NOTES, keyMap, songs } from "./constants"
import { isUserSequenceCorrect, playAudio, validateUserInput } from "./helpers"

const Piano = ({ gameStarted }) => {
  const [selectedNote, setSelectedNote] = useState("")
  const [userInputArr, setUserInputArr] = useState([])
  const [sequenceCount, setSequenceCount] = useState(0)

  function handleKeyDown(event) {
    const userInput = event.key.toLowerCase()
    if (!keyMap[userInput]) return
    if (!gameStarted) return
    validateUserInput({
      sequenceCount,
      userNote: keyMap[userInput],
      setUserInputArr,
      setSequenceCount
    })
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [gameStarted, sequenceCount])

  useEffect(() => playAudio(selectedNote), [selectedNote])
  useEffect(() => isUserSequenceCorrect(userInputArr))

  return (
    <div className="piano">
      {/* <audio src={`assets/Notes/${selectedNote}.mp3`}></audio> */}
      {NOTES.map((note, index) => (
        <Key key={`key-${index}`} note={note} selectedNote={selectedNote} />
      ))}
    </div>
  )
}

export default Piano
