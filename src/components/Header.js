import styled from "styled-components";
import { TextColor, ContainerBackground } from "../styles/sharedStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.header`
  width: 100%;
  ${ContainerBackground};
  ${TextColor};

  & h1 {
    text-align: center;
  }

  & span {
    display: none;
  }

  @media (max-width: 700px) {
    display: flex;
    justify-content: space-between;

    & span {
      display: block;
      font-size: 20px;
      margin: auto 0;
      cursor: pointer;
    }
  }

  @media (max-width: 350px) {
    & h1 {
      font-size: 25px;
    }
  }
`;

const Header = ({ toggleMenu }) => {
  return (
    <StyledHeader>
      <h1>SpotoStats</h1>
      <span onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
      </span>
    </StyledHeader>
  );
};

export default Header;
