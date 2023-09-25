import {NavLink} from "react-router-dom"
const Player = () => {
  return (
    <div>
      player page
      <br />
      <br />
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/player"}>Player</NavLink>
    </div>
  )
}

export default Player