import { useSelector } from "react-redux";

const usePlaylists = () => {
  const state = useSelector((state) => state.playlists);
  const recentPlaylists = useSelector((state) => state.recents.items);
  const playlists = getAllPlaylists();
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
    return playlists.filter((list) =>
      recentPlaylists.includes(list.playlistId)
    );
  }
  console.log(state)

  return {playlists,favorites,recents}
};

export default usePlaylists;
