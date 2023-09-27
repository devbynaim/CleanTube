import styled from "styled-components";
import { logoImg } from "../assets/index";
const Headersection = styled.header`
  background-color: var(--secondary-color);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;
const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 58px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-family: Roboto;
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
  @media screen and (max-width: 375px) {
    height: 36px;
    width: 36px;
    font-size: 18px;
  }
`;
const AddPlayLIstBtn = styled.button`
  width: 100px;
  height: 37px;
  background-color: var(--accent-color);
  color: var(--btn-txt-color);
  &:hover{
    cursor: pointer;
  }
  @media screen and (max-width: 375px) {
    width: 90px;
    height: 33px;
  }
`;

const Header = () => {
  return (
    <Headersection>
      <div className="container">
        <MenuWrapper>
          <LogoWrapper>
            <Logo src={logoImg} />
            <span>cleanTube</span>
          </LogoWrapper>
          <AddPlayLIstBtn>Add Playlist</AddPlayLIstBtn>
        </MenuWrapper>
      </div>
    </Headersection>
  );
};

export default Header;
