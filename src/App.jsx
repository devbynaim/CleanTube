import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/home"
import Player from "./pages/player"
import { useDispatch } from "react-redux"
import { addPlaylist } from "./features/playlists/playlistSlice"
import { useEffect } from "react"
const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(addPlaylist({id:"PL4cUxeGkcC9iVKmtNuCeIswnQ97in2GGf"}))
  },[])
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/player" element={<Player/>}/>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App