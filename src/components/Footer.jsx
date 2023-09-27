import styled from "styled-components";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const FooterRoot = styled.footer`
  background-color: var(--secondary-color);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1.5rem 0;
  font-family: Roboto;
  text-transform: uppercase;
  gap: 10px;
  font-size: 15px;
`;

const LinkList = styled.ul`
  text-align: center;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 10px;
  font-size: 20px;
`;

const AHref = styled.a`
  color: #23538f;
  &:hover{
    color: var(--accent-color);
  }
`;

const Footer = () => {
  return (
    <FooterRoot>
      <FooterWrapper className="container">
        <LinkList>
          <li>
            <AHref href="https://www.facebook.com/naim.real.id" target="_blank">
              <FaFacebook />
            </AHref>
          </li>
          <li>
            <AHref href="#">
              <FaLinkedin />
            </AHref>
          </li>
          <li>
            <AHref href="https://github.com/devbynaim" target="_blank">
              <FaGithub />
            </AHref>
          </li>
        </LinkList>
        <span>Develope by Naim</span>
      </FooterWrapper>
    </FooterRoot>
  );
};

export default Footer;
