import styled from "styled-components";
import { TextColor, ContainerBackground } from "../styles/sharedStyles";

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
    }
  }

  @media (max-width: 350px) {
    & h1 {
      font-size: 25px;
    }
  }
`;

const Header = ({ setOpenMenu }) => {
  return (
    <StyledHeader>
      <h1>SpotoStats</h1>
    </StyledHeader>
  );
};

export default Header;
