import { useSelector } from "react-redux";

const usePlaylist = () => {
  const state = useSelector((state) => state.playlists);
  const recentPlaylists = useSelector((state) => state.recents.items);
  const playlists = getAllPlaylists();
  const {error,loading} = state
  function getAllPlaylists() {
    const playlists = Object.values(state.data).map((list) => {
      const {
        title,
        thumbnail,
        channelId,
        channelTitle,
        description,
        isFavorite,
        playlistId,
        running
      } = list;
      return {
        title,
        thumbnail,
        channelId,
        channelTitle,
        description,
        isFavorite,
        playlistId,
        running
      };
    });
    return playlists;
  }
  const favorites = getFavoritePlaylist()
  const recents = getRecentPlaylist()
  
  function getVideos (playlistId){
    const {channelTitle,items} = state.data[playlistId]
    return {channelTitle,items}
  }
  function getFavoritePlaylist() {
    return playlists.filter((list) => list.isFavorite);
  }

  function getRecentPlaylist() {
    return recentPlaylists.map(id=>{
      return state.data[id]
    })
  }

  return {playlists,favorites,recents,error,loading,getVideos}
};

export default usePlaylist;
