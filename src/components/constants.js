const NOTES = [
  "C4",
  "Db4",
  "D4",
  "Eb4",
  "E4",
  "F4",
  "Gb4",
  "G4",
  "Ab4",
  "A4",
  "Bb4",
  "B4"
]
// const secondOctave = [ 'C5', 'Db5', 'D5', 'Eb5', 'E5', 'F5', 'Gb5', 'G5', 'Ab5', 'A5', 'Bb5', 'B5' ]
const songs = ["C4", "Db4", "D4"]

// ----------------------
const songs2 = ['G4', 'A4', 'G4', 'C4', 'B4', 'G4', 'A4', 'G4', 'D4', 'C4', 'G4', 'E4', 'C4', 'B4', 'A4', 'F4', 'E4', 'C4', 'D4', 'C4'] // Happy birthday Right

const songs3 = ['C4', 'G4', 'C4', 'F4', 'C4', 'G4', 'C4'] // Happy Birthday Left

const songs4 = ['C4', 'G4', 'F4', 'E4', 'D4', 'C4', 'G4', 'F4', 'E4', 'D4', 'C4', 'G4', 'F4', 'E4', 'F4', 'D4', 'C4', 'G4', 'F4', 'E4', 'D4', 'C4', 'G4', 'F4', 'E4', 'F4', 'E4', 'D4', 'C4', 'D4', 'E4', 'D4', 'F4', 'E4', 'D4', 'C4', 'G4', 'D4', 'F4', 'E4', 'D4', 'C4', 'C4', 'C4', 'D4', 'E4', 'D4', 'E4', 'D4', 'C4', 'A4', 'G4', 'G4', 'F4', 'D4', 'C4', 'G4', 'F4', 'E4', 'D4', 'C4', 'G4', 'F4', 'E4', 'D4', 'C4', 'G4', 'E4',  'D4',  'C4',  'G4',  'F4',  'E4',  'D4',  'C4',  'G4',  'F4',  'E4',  'D4',  'C4',  'G4',  'F4',  'E4',  'F4',  'D4',  'C4',  'C4',  'C4'] // Star Wars Right

const songs5 = ['G4', 'A4', 'B4', 'G4', 'A4', 'B4', 'G4', 'A4', 'C4', 'G4'] // Star Wars Left
// ----------------------

// b, n, b, z, m, b, n, b, x, z, b, c, z, m, n, v, c, z, x - Happy birthday cheatkey

const keyMap = {
  z: "C4",
  s: "Db4",
  x: "D4",
  d: "Eb4",
  c: "E4",
  v: "F4",
  g: "Gb4",
  b: "G4",
  h: "Ab4",
  n: "A4",
  j: "Bb4",
  m: "B4"
}

export { NOTES, keyMap, songs }
