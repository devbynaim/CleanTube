import styled from "styled-components";
import { thumb } from "../../assets";

const Card = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 84px;
  background-color: white;
  border: ${(props) => (props.active ? "2px solid #e41a0e38" : "none")};
  box-shadow: ${(props) =>
    props.active ? "0px 0px 2px 0px #00000047" : "none"};
    transition: all .1s;
  &:hover {
    border: 2px solid #e41a0e38;
    box-shadow: 0px 0px 2px 0px #00000047;
  }
`;
const Thumb = styled.img`
  height: 100%;
  width: 150px;
`;
const Content = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.a`
  font-size: 14px;
  color: black;
`;
const Channel = styled.a`
  font-size: 12px;
  color: #8c8585;
`;

const VideoCard = ({ title, active = false }) => {
  const playVideo = () => {
    console.log("playing..........");
  };
  return (
    <Card active={active} onClick={playVideo}>
      <Thumb src={thumb} />
      <Content>
        <Title href="#">{`${
          title ? title : "Full-stack Army Intro new video by naim......"
        }`}</Title>
        <Channel href="#">Stack Learner</Channel>
      </Content>
    </Card>
  );
};

export default VideoCard;
