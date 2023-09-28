import styled from "styled-components";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlaylist } from "../../features/playlist/playlistSlice";

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
  border: none;
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

const Modal = ({closeModal}) => {
    const dispatch = useDispatch()
    const [url, setUrl] = useState("")
    
    const handleInputUrl = (e) => {
        setUrl(e.target.value)
    }
    
    const handleAddPlaylist = () => {
        dispatch(addPlaylist({ id: url }))
        closeModal()
    }
    
  return (
    <DimOverlay>
      <ModalWrapper>
        <CloseButtonWrapper>
          <IoMdCloseCircle style={{ cursor: "pointer" }} onClick={closeModal}/>
        </CloseButtonWrapper>
        <ModalContainer>
          <PlaylistInput placeholder="Enter Playlist URL Or ID" value={url} onChange={handleInputUrl} />
          
          <AddPlaylistButton onClick={handleAddPlaylist}>Add</AddPlaylistButton>
        </ModalContainer>
      </ModalWrapper>
    </DimOverlay>
  );
};

export default Modal;
