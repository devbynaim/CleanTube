import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styled from "styled-components";
import YouTube from "react-youtube";
import VideoCard from "../../components/shared/VideoCard";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import usePlaylist from "../../hooks/usePlaylist";


const HomeWrapper = styled.div`
  flex-direction: column;
  display: flex;
  height: 100vh;
`;

const Main = styled.main`
  /* min-height:72vh; */
`;
const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  min-height: 100vh;
  overflow: hidden;
  margin: 15px 0;
  background-color: white;
`;
const LeftSide = styled.div`
  width: 100%;
  overflow: hidden;
`;

const VideoContainer = styled.div`
  width: 97%;
  margin: auto;
  margin-top: 10px;
  /* background-color: tomato; */
  height: 700px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RightSide = styled.div`
  min-width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 3px;
  overflow: scroll;
  transition: scroll-behavior 3s ease-in-out;
`;

const Title = styled.a`
  font-size: 16px;
  font-weight: bold;
`;

const ActionContainer = styled.div`
  display: flex;
  gap: 5px;
`;
const ActionBtn = styled.button`
  font-size: 15px;
  font-weight: bold;
  width: 100%;
  background-color: ${({ active }) => (active ? "#F2F2F2" : "white")};
  height: 35px;
  border-radius: 2px;
  box-shadow: none;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    background-color: #f2f2f2;
  }
`;
const Description = styled.p`
  display: block;
  font-size: 14px;
`;
const dummySkeleton = new Array(7).fill("skeleton");

const Player = () => {
  const [isNote, setIsNote] = useState(false);
  const location = useLocation();
  const params = new URL(`https://www.youtube.com/${location.search}`)
    .searchParams;
  const playlistId = params.get("list");
  const running = params.get("running");
  const { getVideos } = usePlaylist();
  const { channelTitle, items } = getVideos(playlistId);
  const [runningVideo, setRuningVideo] = useState();


  useEffect(() => {
    setRuningVideo(items[running]);
  }, [running]);

  const opts = {
    height: "40vh",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const toggle = (action) => {
    setIsNote(action);
  };
  return (
    <HomeWrapper>
      <Header />
      <Main className="container">
        <MainWrapper>
          <LeftSide>
            {runningVideo && (
              <YouTube videoId={runningVideo.videoId} opts={opts} />
            )}
            <VideoContainer>
              <Title>{runningVideo && runningVideo.title}</Title>
              <ActionContainer>
                <ActionBtn active={!isNote} onClick={() => toggle(false)}>
                  Description
                </ActionBtn>
                <ActionBtn active={isNote} onClick={() => toggle(true)}>
                  Notes
                </ActionBtn>
              </ActionContainer>
              {!isNote && (
                <Description>
                  {runningVideo && runningVideo.description}
                </Description>
              )}
            </VideoContainer>
          </LeftSide>
          <RightSide>
            {items.map(({ thumbnail, title, videoId,position }, index) => {
              return (
                <VideoCard
                  thumbnail={thumbnail}
                  title={title}
                  channelTitle={channelTitle}
                  active={index == running}
                  key={videoId}
                  position={position}
                  playlistId={playlistId}
                  
                />
              );
            })}
          </RightSide>
        </MainWrapper>
      </Main>
      <Footer />
    </HomeWrapper>
  );
};

export default Player;
