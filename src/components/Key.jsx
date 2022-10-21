const Key = ({ note, selectedNote, letter }) => {
  const keyClassName = note.length >= 3 ? "key flat" : "key"
  const selectedClassName = note === selectedNote ? "selectedKey" : ""

  return (
    <div className={`${keyClassName} ${selectedClassName}`} data-note={note}>
      <span className="letter">{letter}</span>
    </div>
  )
}

export default Key
