import styled from "styled-components";
import { logoImg } from "../assets/index";
import Modal from "./shared/Modal";
import useModal from "../hooks/useModal";
import { Link } from "react-router-dom";
const HeaderWrapper = styled.header`
  background-color: var(--secondary-color);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 58px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-family: Roboto;
`;

const LogoImage = styled.img`
  height: 40px;
  width: 40px;
  @media screen and (max-width: 375px) {
    height: 36px;
    width: 36px;
    font-size: 18px;
  }
`;

const AddPlaylistButton = styled.button`
  width: 100px;
  height: 37px;
  background-color: var(--accent-color);
  color: var(--btn-txt-color);
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 375px) {
    width: 90px;
    height: 33px;
  }
`;

const Header = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <HeaderWrapper>
      {isModalOpen && <Modal closeModal={closeModal} />}
      <div className="container">
        <MenuContainer>
          <Link to={"/"}>
            <LogoContainer>
              <LogoImage src={logoImg} alt="cleanTube Logo" />
              <span>cleanTube</span>
            </LogoContainer>
          </Link>
          <AddPlaylistButton onClick={openModal}>
            Add Playlist
          </AddPlaylistButton>
        </MenuContainer>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
