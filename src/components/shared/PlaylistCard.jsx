import styled from "styled-components";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {useNavigate } from "react-router-dom"
import {
  addToFavorite,
  deletePlaylist,
  removeFromFavorite,
} from "../../features/playlist/playlistSlice";
import { addToRecent } from "../../features/recents/recentSlice";

const Card = styled.div`
  min-width: 165px;
  height: 340px;
  background-color: var(--secondary-color);
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 3px rgba(255, 0, 0, 0.3);
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
`;

const ChannelDiv = styled.div`
  width: 130px;
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
  cursor: pointer;
`;

const Description = styled.p`
  font-size: 14px;
  color: #1a1818;
  cursor: pointer;
`;

const PlaylistCard = ({
  title,
  thumbnail,
  channelId,
  channelTitle,
  description,
  isFavorite,
  playlistId,
  all,
  running
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
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
    navigate(`player?list=${playlistId}&running=${running}`)
    dispatch(addToRecent({id:playlistId}))
  };

  return (
    <Card>
      <Thumb src={thumbnail.medium.url} onClick={handelPlayer} />
      <ContentWrapper>
        <ChannelAndFevWrapper>
          <ChannelDiv>
            <ChannelLink
              href={`https://www.youtube.com/channel/${channelId}`}
              target="_blank"
            >
              {`${channelTitle.substring(0, 17)} ${
                channelTitle.length > 17 ? "....." : ""
              }`}
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
        <Title href="#" onClick={handelPlayer}>{`${title.substring(0, 50)} ${
          title.length > 50 ? ".........." : ""
        }`}</Title>
        <Description onClick={handelPlayer}>
          {`${description.substring(0, 100)} ................................`}
        </Description>
      </ContentWrapper>
    </Card>
  );
};

export default PlaylistCard;
