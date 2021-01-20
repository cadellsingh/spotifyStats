import styled from "styled-components";
import { ContainerBackgroundColor, TextColor } from "../styles/sharedStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.header`
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  ${ContainerBackgroundColor};
  ${TextColor};

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
    }
  }
`;

const Header = ({ setShowLinks }) => {
  return (
    <StyledHeader>
      <h1>SpotoStats</h1>
      <span onClick={() => setShowLinks(true)}>
        <FontAwesomeIcon icon={faBars} />
      </span>
    </StyledHeader>
  );
};

export default Header;
