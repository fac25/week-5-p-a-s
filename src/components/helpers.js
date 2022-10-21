import { songs } from "./constants.js"

const playSequence = (song = songs) => {
  let time = 0
  for (let i = 0; i <= song.length; i++) {
    setTimeout(() => {
      const note = song[i]
      styleKey(note)
      playAudio(note)
    }, time)
    time += 300
  }
}

const styleKey = (note) => {
  const keyElNodelist = document.querySelectorAll(`[data-note]`)
  const keyEl = document.querySelector(`[data-note=${note}]`)

  keyElNodelist.forEach((key) => key.classList.remove("selectedKey"))
  keyEl?.classList.add("selectedKey")
  setTimeout(() => {
    keyEl?.classList.remove("selectedKey")
  }, 1000)
}

const playAudio = (userNote) => {
  const noteAudio = new Audio()
  noteAudio.src = `assets/Notes/${userNote}.mp3`
  noteAudio.play()
}

const validateUserInput = ({
  setScore,
  sequenceCount,
  userNote,
  setUserInputArr,
  setSequenceCount,
  setResultMessage
}) => {
  const sequenceNote = songs[sequenceCount]
  if (userNote !== sequenceNote) {
    setResultMessage("Game Over")
    return
  }
  setUserInputArr((prevArray) => [...prevArray, userNote])
  setSequenceCount((prevCount) => prevCount + 1)
  setScore((prevScore) => prevScore + 1)
}

const isUserSequenceCorrect = (userInputArr, setResultMessage) => {
  const sequenceArr = songs
  if (sequenceArr.length === userInputArr.length) {
    setResultMessage("Game Won")
  }
}

export {
  playSequence,
  playAudio,
  validateUserInput,
  isUserSequenceCorrect,
  styleKey
}
