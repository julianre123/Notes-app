import { useState } from 'react'
import uuid from 'react-uuid'
import { useEffect } from 'react'


import Main from './components/Main'
import Sidebar from './components/Sidebar'

import './App.css'

function App() {
  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) :  []);
  const [activeNote,setActiveNote] = useState(false);

  

  
useEffect(()=>{
localStorage.setItem("notes", JSON.stringify(notes))
},[notes])



  function addNote () {
    const newNote ={
      id:uuid(),
      title:"Untitled Note",
      content:"",
      lastModified: Date.now(),
      
    }


    setNotes([newNote,...notes])
  }
  function onDeleteNote(idDelete){
setNotes(notes.filter((note)=>note.id !== idDelete))
  }

  function onUpdateNote (onUpdatednote){
     const updateNotesArray = notes.map(note => {
if(note.id === activeNote){
  return onUpdatednote
}
return note;
     })


     setNotes(updateNotesArray)
  }

  function getActiveNote(){
    return notes.find(note=>note.id === activeNote)
  }
  return (
    <div className="App">
      <Sidebar 
      notes={notes}
      addNote={addNote}
      onDeleteNote={onDeleteNote}
      activeNote={activeNote}
      setActiveNote={setActiveNote}
      
      />
      <Main 
      getActiveNote={getActiveNote()}
      updateNote={onUpdateNote}
      />
    </div>
  )
}

export default App
