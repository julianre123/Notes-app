import React from 'react'

import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
function Main(props) {

  function onEditField(key,value){
props.updateNote({
  ...props.getActiveNote,
  [key]:value,
  lastModified:Date.now()

}

)
  }

  if(!props.getActiveNote) return <div className='no-active-note'>No Active Note</div>;
  return (
    <div className="main">
    <div className="main-note-edit">
        <input type="text" name="title" value={props.getActiveNote.title} 
        onChange={(e)=>{onEditField("title",e.target.value)}} id="title" />
        <textarea placeholder='Write your note here...' 
        onChange={(e)=>{onEditField("content",e.target.value)}}
        value={props.getActiveNote.content} id="body"></textarea>
    </div>
    <div className="main-note-preview">
        <h1>{props.getActiveNote.title}</h1>
        <ReactMarkdown className="preview-text">
        {props.getActiveNote.content}
        </ReactMarkdown>
    </div>
    </div>
  )
}

export default Main