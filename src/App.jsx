import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addNote, deleteNote, updateNote } from "./features/notes/noteSlice";

const App = () => {
  const [videoIId,setVideoIId] = useState("")
  const notes = useSelector(state=>state.notes)
  const dispatch = useDispatch()
  console.log(notes);
  useEffect(()=>{
    setTimeout(()=>{
      dispatch(addNote({videId:"1346",timeline:"0.24",note:"hello this is note"}))
      console.log("note added");
    },2000)
    setTimeout(()=>{
      dispatch(addNote({videId:"1346",timeline:"0.50",note:"hello this is note 2"}))
      console.log("note added");
    },3000)
    setTimeout(()=>{
      dispatch(addNote({videId:"134677",timeline:"0.24",note:"  i am going to be deleted"}))
      console.log("note added");
    },4000)
  },[])

  const handelDelete = ()=>{
    // dispatch(deleteNote({videId:"1346", noteId:videoIId}))
    dispatch(updateNote({videoId:"1346",noteId:videoIId,note:"updated note"}))
  }
  return (
    <div>App
      <input type="text" name="" id="" value={videoIId} onChange={(e)=>{setVideoIId(e.target.value)}}/>
      <button onClick={handelDelete}>delete</button>
    </div>
  )
}

export default App