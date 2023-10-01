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
      } = list;
      return {
        title,
        thumbnail,
        channelId,
        channelTitle,
        description,
        isFavorite,
        playlistId,
      };
    });
    return playlists;
  }
  const favorites = getFavoritePlaylist()
  const recents = getRecentPlaylist()

  function getFavoritePlaylist() {
    return playlists.filter((list) => list.isFavorite);
  }

  function getRecentPlaylist() {
    return recentPlaylists.map(id=>{
      return state.data[id]
    })
  }

  return {playlists,favorites,recents,error,loading}
};

export default usePlaylist;
