import { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PlaylistCard from "../../components/shared/PlaylistCard";
import { useDispatch } from "react-redux";
import { addPlaylist } from "../../features/playlist/playlistSlice";
import usePlaylist from "../../hooks/usePlaylist";
const Home = () => {
  const { playlists } = usePlaylist();
  const dispatch = useDispatch();
  console.log("playlist", playlists);
  useEffect(() => {
    dispatch(addPlaylist({ id: "PL_XxuZqN0xVD911duktCZ3FXJfz9k8AwW" }));
  }, []);
  return (
    <div>
      <Header />
      <main>
        {playlists.map(
          ({ title, channelId, channelTitle, thumbnail, description,playlistId,isFavorite }) => {
            return (
              <PlaylistCard
                key={playlistId}
                channelId={channelId}
                channelTitle={channelTitle}
                description={description}
                title={title}
                thumbnail={thumbnail}
                playlistId= {playlistId}
                isFavorite={isFavorite}
                all={true}
              />
            );
          }
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
