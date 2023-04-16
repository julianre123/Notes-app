import React from 'react'

const Sidebar = (props) => {
const sortedNotes = props.notes.sort((a,b)=> b.lastModified - a.lastModified)



  return (
   <div className="sidebar">
    <div className="sidebar-header">
        <h1>Notes</h1>
        <button onClick={props.addNote}>Add</button>
    </div>
    <div className="sidebar-notes">
        {sortedNotes.map(note => (
            <div className={`sidebar-note ${note.id === props.activeNote && "active"}`} key={note.id}
            onClick={()=>props.setActiveNote(note.id)}>
            <div className="sidebar-note-title">
                <strong>{note.title}</strong>
                <button onClick={()=>props.onDeleteNote(note.id)}>Delete</button>
            </div>
            <p>{note.content && note.content.substr(0,35) + "..."}</p>
            <small className="note-meta">
                Last Modified {new Date(note.lastModified).toLocaleDateString("en-US",
                {hour:"2-digit",
                minute:"2-digit"
                })}
                </small>
        </div>
        ))}
    </div>
   </div>
  )
}

export default Sidebar