import styled from "styled-components";
import { TextColor, ContainerBackground } from "../styles/sharedStyles";
import { handleLogout } from "../utils/functions";

const LogoutButton = styled.button`
  width: 100%;
  margin-top: 15px;
  ${ContainerBackground};
  cursor: pointer;

  :hover {
    ${TextColor}
  }
`;

const Logout = () => {
  return <LogoutButton onClick={handleLogout}>Logout</LogoutButton>;
};

export default Logout;
