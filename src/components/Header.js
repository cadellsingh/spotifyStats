import styled from "styled-components";
import { ContainerBackgroundColor, TextColor } from "../styles/sharedStyles";

const StyledHeader = styled.header`
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  ${ContainerBackgroundColor};
  ${TextColor}
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>SpotoStats</h1>
    </StyledHeader>
  );
};

export default Header;
