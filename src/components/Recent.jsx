import styled from "styled-components";
import { FaPlay } from "react-icons/fa";

const RecentCard = styled.div`
  width: 100%;
  height: 245px;
  background-color: var(--secondary-color);
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  box-shadow: 0px 0px 3px rgba(255, 0, 0, 0.3);
`;
const RecentCardLeft = styled.div`
  width: 100%;
  height: auto;
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
`;

const RecentThumb = styled.img`
  width: 513px;
  height: fit-content;
  cursor: pointer;
  position: absolute;
  top: -50px;
`;
const RecentCardRight = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RightSideContainer = styled.div`
  display: flex;
  width: 90%;
  height: 90%;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
`;

const Title = styled.a`
  font-size: 15px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  cursor: pointer;
`;

const Description = styled.p`
  font-size: 14px;
  color: #1a1818;
  cursor: pointer;
  height: 121px;
  overflow: hidden;
  @media screen and (max-width: 440px) {
    height: 104px;
  }
`;

const ChannelDiv = styled.div`
  width: 130px;
  height: 30px;
  background-color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ChannelLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 13px;
  &:hover {
    color: var(--accent-color);
  }
`;

const ChannelAndFevWrapper = styled.div`
  width: 145px;
  background-color: var(--accent-color);
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  gap: 6px;
`;

const Recent = ({
  title,
  thumbnail,
  channelId,
  channelTitle,
  description,
  playlistId,
  
}) => {
  const handelPlayer = () => {
    console.log("Go Player page");
  };
  return (
    <RecentCard>
      <RecentCardLeft>
        <RecentThumb src={thumbnail.high.url} onClick={handelPlayer} />
      </RecentCardLeft>
      <RecentCardRight>
        <RightSideContainer>
          <div style={{ height: "10%" }}>
            <Title href="#" onClick={handelPlayer}>{`${title.substring(
              0,
              35
            )} ${title.length > 50 ? ".........." : ""}`}</Title>
            <Description onClick={handelPlayer}>
              {`${description.substring(0, 500)} ${
                !description.length ? "........................" : ""
              }`}
            </Description>
          </div>
          <ChannelAndFevWrapper>
            <ChannelDiv>
              <ChannelLink
                href={`https://www.youtube.com/channel/${channelId}`}
                target="_blank"
              >
                {`${channelTitle.substring(0, 15)} ${
                  channelTitle.length > 15 ? "...." : ""
                }`}{" "}
              </ChannelLink>
            </ChannelDiv>
            <FaPlay style={{ color: "white" }} />
          </ChannelAndFevWrapper>
        </RightSideContainer>
      </RecentCardRight>
    </RecentCard>
  );
};

export default Recent;
