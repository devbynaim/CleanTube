import styled from "styled-components";
import { IoMdCloseCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlaylist } from "../../features/playlist/playlistSlice";
import { StyleSheetManager } from "styled-components";

const DimOverlay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #9999997a;
  z-index: 2;
`;

const ModalWrapper = styled.div`
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  background-color: #ffff;
  padding: 10px;
  width: 465px;
  border-radius: 8px;
  height: 175px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ModalContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: auto;
`;

const PlaylistInput = styled.input`
  width: 100%;
  height: 44px;
  outline: none;
  border: ${(props) => (props.err ? "1px solid red" : "none")};
  padding: 0px 15px;
  font-size: 14px;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
`;

const AddPlaylistButton = styled.button`
  width: 100%;
  height: 44px;
  background-color: #e41a0ec7;
  font-size: 15px;
  color: white;
  &:hover {
    cursor: pointer;
    background-color: var(--accent-color);
  }
`;

const CloseButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 20px;
`;

const ErrorLebel = styled.label`
  font-size: 13px;
  color: red;
`;

const Modal = ({ closeModal }) => {
  const { error, loading } = useSelector((state) => state.playlists);
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");
  const [submit, setSubmit] = useState(false);
  useEffect(() => {
    if (error!=null && !error.message && !loading && submit) {
      closeModal();
    }
  }, [error, loading]);

  const handleInputUrl = (e) => {
    setUrl(e.target.value);
  };

  const handleAddPlaylist = () => {
    let listId;
    try {
      listId = new URL(url).searchParams.get("list");
    } catch (e) {
      listId = url
    }
    dispatch(addPlaylist({ id: listId }));
    setSubmit(true);
  };

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "err"}>
      <DimOverlay>
        <ModalWrapper>
          <CloseButtonWrapper>
            <IoMdCloseCircle
              style={{ cursor: "pointer" }}
              onClick={closeModal}
            />
          </CloseButtonWrapper>
          <ModalContainer>
            <PlaylistInput
              err={error?error.message:''}
              placeholder="Enter Playlist URL Or ID"
              value={url}
              onChange={handleInputUrl}
            />

            {error?error.message && (
              <ErrorLebel>{`${
                error.message == "exist"
                  ? "playlist already exist"
                  : "Invalid url or playlist id"
              }`}</ErrorLebel>
            ):''}
            <AddPlaylistButton onClick={handleAddPlaylist}>
              Add
            </AddPlaylistButton>
          </ModalContainer>
        </ModalWrapper>
      </DimOverlay>
    </StyleSheetManager>
  );
};

export default Modal;
