import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPlaylist,
  deletePlaylist,
} from "./features/playlists/playlistSlice";
import { addToFavorite, removeFromFavorite } from "./features/favorites/favoriteSlice";
import { addToRecent } from "./features/recents/recentSlice";
const App = () => {
  const st = useSelector((state) => state.playlists);
  const fv = useSelector((state) => state.favorites);
  const rc = useSelector((state) => state.recents);
  const dispatch = useDispatch();
  const handelBtn = () => {
    dispatch(addPlaylist({ id: "PLgeETUaEEds75rwfCOKPoND__EaZAwkS8" }));
    dispatch(addPlaylist({ id: "PLN_2w5Jp1nUCsmOQU9GxBk2Xx209TSvUB" }));
    dispatch(addToFavorite({id:'testid'}))
    dispatch(addToRecent({id:"test1"}))
    dispatch(addToRecent({id:"test2"}))
    dispatch(addToRecent({id:"test3"}))
    dispatch(addToRecent({id:"test4"}))
  };
  const handelBtnd = () => {
    dispatch(deletePlaylist({ id: "PLN_2w5Jp1nUCsmOQU9GxBk2Xx209TSvUB" }));
    dispatch(removeFromFavorite({id:'testid'}))
  };
  useEffect(() => {
    console.log("my state", st);
    console.log("my state", fv);
    console.log("my recents", rc);
  }, [st]);
  return (
    <div>
      App
      <button onClick={handelBtn}>Fatch</button>
      <button onClick={handelBtnd}>delete</button>
    </div>
  );
};

export default App;
