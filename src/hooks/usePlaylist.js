import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cacheGet } from "../features/playlist/playlistSlice";
import { setStateToLocal } from "../utils/localstroge";
import { useState } from "react";
import { cacheGetRecent } from "../features/recents/recentSlice";

const usePlaylist = () => {
  const state = useSelector((state) => state.playlists);
  const recentPlaylists = useSelector((state) => state.recents.items);
  const playlists = getAllPlaylists();
  const { error, loading } = state;
  const dispatch = useDispatch();
  let [isSkip, setIsSkip] = useState(false);
  useEffect(() => {
    dispatch(cacheGet());
    dispatch(cacheGetRecent())
    console.log("accc");
  }, []);

  useEffect(() => {
    if (isSkip) {
      setStateToLocal(state, "playlist");
    } else {
      setIsSkip(true);
    }
  }, [state]);

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
        running,
      } = list;
      return {
        title,
        thumbnail,
        channelId,
        channelTitle,
        description,
        isFavorite,
        playlistId,
        running,
      };
    });
    return playlists;
  }
  const favorites = getFavoritePlaylist();
  const recents = getRecentPlaylist();

  function getVideos(playlistId) {
    if (state.data[playlistId]) {
      const { channelTitle, items } = state.data[playlistId];
      return { channelTitle, items };
    }
    return { channelTitle: "", items: [] };
  }
  function getFavoritePlaylist() {
    return playlists.filter((list) => list.isFavorite);
  }

  function getRecentPlaylist() {
    return recentPlaylists.map((id) => {
      return state.data[id];
    });
  }

  return { playlists, favorites, recents, error, loading, getVideos };
};

export default usePlaylist;
