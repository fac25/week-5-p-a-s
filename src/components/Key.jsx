const Key = ({ note, selectedNote }) => {
    const keyClassName = note.length >= 3 ? "key flat" : "key"
    const selectedClassName = note === selectedNote ? "selectedKey" : ""
    
    return <div className={`${keyClassName} ${selectedClassName}`}></div>
  }
  
  export default Key