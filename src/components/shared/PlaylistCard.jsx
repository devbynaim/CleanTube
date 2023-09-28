import styled from "styled-components";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  addToFavorite,
  deletePlaylist,
  removeFromFavorite,
} from "../../features/playlist/playlistSlice";
import { useState } from "react";

const Card = styled.div`
  width: 240px;
  height: 340px;
  background-color: var(--secondary-color);
  margin: 10px;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
`;

const Thumb = styled.img`
  width: 100%;
  height: fit-content;
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 0 10px;
`;

const ChannelAndFevWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
`;

const ChannelDiv = styled.div`
  width: 145px;
  height: 30px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 10px 0;
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

const FavWraper = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  gap: 5px;
  color: var(--accent-color);
  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.a`
  font-size: 15px;
  text-decoration: none;
  color: black;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 14px;
  color: #1a1818;
  cursor: pointer;
`;

const CardPlayMode = styled.div`
  position: absolute;
  background-color: #151a1a9e;
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 20px;
`;

const PlaymodeItem = styled.div`
  width: 100%;
  height: ${(props) =>
    props.head
      ? "135px"
      : props.body
      ? "50px"
      : props.footer
      ? "138px"
      : "0px"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const PlaylistCard = ({
  title,
  thumbnail,
  channelId,
  channelTitle,
  description,
  isFavorite,
  playlistId,
  all = false,
}) => {
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();
  const handelFavAction = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite({ id: playlistId }));
      return;
    }
    dispatch(addToFavorite({ id: playlistId }));
  };
  const handelDelete = () => {
    dispatch(deletePlaylist({ id: playlistId }));
  };
  const handelPlayer = () => {
    console.log("Go Player page");
  };

  const handleCardHover = () => {
    setHovered(true);
  };
  const handleCardHoverOut = () => {
    setHovered(false);
  };
  return (
    <Card>
      {hovered && (
        <CardPlayMode>
          <PlaymodeItem head="true" onMouseOut={handleCardHoverOut}>
          </PlaymodeItem>
          <PlaymodeItem
            body="true"
            onMouseEnter={handleCardHoverOut}
          ></PlaymodeItem>
          <PlaymodeItem body="true" onMouseEnter={handleCardHoverOut}>
            <FaPlay /> Play
          </PlaymodeItem>
          <PlaymodeItem
            footer="true"
            onMouseOut={handleCardHoverOut}
          ></PlaymodeItem>
        </CardPlayMode>
      )}
      <Thumb
        src={thumbnail.url}
        onClick={handelPlayer}
        onMouseOver={handleCardHover}
      />
      <ContentWrapper>
        <ChannelAndFevWrapper>
          <ChannelDiv>
            <ChannelLink
              href={`https://www.youtube.com/channel/${channelId}`}
              target="_blank"
            >
              {channelTitle}
            </ChannelLink>
          </ChannelDiv>
          <FavWraper>
            {isFavorite ? (
              <MdFavorite onClick={handelFavAction} />
            ) : (
              <MdOutlineFavoriteBorder onClick={handelFavAction} />
            )}
            {all && (
              <AiOutlineDelete
                style={{ color: "black" }}
                onClick={handelDelete}
              />
            )}
          </FavWraper>
        </ChannelAndFevWrapper>
        <Title href="#">{title}</Title>
        <Description onClick={handelPlayer} onMouseEnter={handleCardHover}>
          {`${description.substring(0, 160)}..........`}
        </Description>
      </ContentWrapper>
    </Card>
  );
};

export default PlaylistCard;
