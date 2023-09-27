import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/home"
import Player from "./pages/player"
const App = () => {

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