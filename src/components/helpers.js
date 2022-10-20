import { songs } from "./constants.js"

function playSequence(song = songs) {
  let time = 0
  for (let i = 0; i <= song.length; i++) {
    setTimeout(() => {
      const note = song[i]
      const keyElNodelist = document.querySelectorAll(`[data-note]`)
      const keyEl = document.querySelector(`[data-note=${note}]`)

      keyElNodelist.forEach((key) => key.classList.remove("selectedKey"))
      keyEl?.classList.add("selectedKey")
      playAudio(note)
    }, time)
    time += 1500
  }
}

function playAudio(selectedNote) {
  if (!selectedNote) return

  const noteAudio = new Audio()
  noteAudio.src = `assets/Notes/${selectedNote}.mp3`
  noteAudio.play()
}

function validateUserInput({
  sequenceCount,
  userNote,
  setUserInputArr,
  setSequenceCount
}) {
  const sequenceNote = songs[sequenceCount]
  if (userNote !== sequenceNote) {
    console.log("Try next time")
    return
  }
  setUserInputArr((prevArray) => [...prevArray, userNote])
  setSequenceCount((prevCount) => (prevCount += 1))
}

function isUserSequenceCorrect(userInputArr) {
  const sequenceArr = songs
  if (sequenceArr.length === userInputArr.length) {
    console.log("You won")
  }
}

export { playSequence, playAudio, validateUserInput, isUserSequenceCorrect }
