import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/home"
import Player from "./pages/player"
import { useDispatch } from "react-redux"
import { addPlaylist } from "./features/playlists/playlistSlice"
import { useEffect } from "react"
import usePlaylists from "./hooks/usePlaylists"
const App = () => {
  const {playlists} = usePlaylists()
  console.log(playlists);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(addPlaylist({id:"PL_XxuZqN0xVD911duktCZ3FXJfz9k8AwW"}))
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