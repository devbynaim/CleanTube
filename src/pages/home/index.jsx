import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PlaylistCard from "../../components/shared/PlaylistCard";
import { useDispatch } from "react-redux";
import { addPlaylist } from "../../features/playlist/playlistSlice";
import usePlaylist from "../../hooks/usePlaylist";
import Recent from "../../components/recent";
import styled from "styled-components";

const HomeWrapper = styled.div`
  flex-direction: column;
  display: flex;
  height: 100vh;
`;

const Main = styled.main`
  /* min-height:72vh; */
`;
const MainContainer = styled.div``;
const ToggleBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 15px;
`;

const Btn = styled.button`
  background-color: white;
  width: 130px;
  height: 30px;
  &:hover {
    cursor: pointer;
    background-color: #23538f;
    color: white;
  }
`;

const PlaylistConatiner = styled.div`
  width: 100%;
  margin: 15px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 240px));
  gap: 20px;
  @media screen and (max-width: 538px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 380px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: block;
  margin-top: 15px;
`;

const Home = () => {
  const { playlists, recents, favorites } = usePlaylist();
  const [isFavorite, setIsFavorite] = useState(false);
  const recent = recents[0];
  const dispatch = useDispatch();
  const handelToggle = (isFev) => {
    setIsFavorite(isFev);
  };
  useEffect(() => {
    dispatch(addPlaylist({ id: "PL_XxuZqN0xVD911duktCZ3FXJfz9k8AwW" }));
    dispatch(addPlaylist({ id: "PL_XxuZqN0xVDgr7KreI5PaVZuG8Sx3L2c" }));
    dispatch(addPlaylist({ id: "PL_XxuZqN0xVBfji5SwKd-CQijtdmcUTMU" }));
    dispatch(addPlaylist({ id: "PL9RcWoqXmzaKWxaNoDhW4O1kA0hK9AYys" }));
    dispatch(addPlaylist({ id: "PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl" }));
    dispatch(addPlaylist({ id: "PL_XxuZqN0xVDIlzHwTJr7IqIW1A2eECwy" }));
  }, []);
  return (
    <HomeWrapper>
      <Header />
      <Main>
        <MainContainer className="container">
          {recent ? (
            <Recent
              channelId={recent.channelId}
              channelTitle={recent.channelTitle}
              description={recent.description}
              title={recent.title}
              thumbnail={recent.thumbnail}
              playlistId={recent.playlistId}
            />
          ) : (
            <Label>No recent playlists</Label>
          )}
          <ToggleBar>
            <Btn
              className={!isFavorite ? "active-btn" : ""}
              onClick={() => handelToggle(false)}
            >
              All
            </Btn>
            <Btn
              className={isFavorite ? "active-btn" : ""}
              onClick={() => handelToggle(true)}
            >
              Favorites
            </Btn>
          </ToggleBar>
          {isFavorite && (
            <PlaylistConatiner>
              {favorites.length ? (
                favorites.map(
                  ({
                    title,
                    channelId,
                    channelTitle,
                    thumbnail,
                    description,
                    playlistId,
                    isFavorite,
                  }) => {
                    return (
                      <PlaylistCard
                        key={playlistId}
                        channelId={channelId}
                        channelTitle={channelTitle}
                        description={description}
                        title={title}
                        thumbnail={thumbnail}
                        playlistId={playlistId}
                        isFavorite={isFavorite}
                        all={true}
                      />
                    );
                  }
                )
              ) : (
                <Label>No playlists found</Label>
              )}
            </PlaylistConatiner>
          )}
          {!isFavorite && (
            <PlaylistConatiner>
              {playlists.length ? (
                playlists.map(
                  ({
                    title,
                    channelId,
                    channelTitle,
                    thumbnail,
                    description,
                    playlistId,
                    isFavorite,
                  }) => {
                    return (
                      <PlaylistCard
                        key={playlistId}
                        channelId={channelId}
                        channelTitle={channelTitle}
                        description={description}
                        title={title}
                        thumbnail={thumbnail}
                        playlistId={playlistId}
                        isFavorite={isFavorite}
                        all={true}
                      />
                    );
                  }
                )
              ) : (
                <Label>No playlists found</Label>
              )}
            </PlaylistConatiner>
          )}
        </MainContainer>
      </Main>
      <Footer />
    </HomeWrapper>
  );
};

export default Home;
