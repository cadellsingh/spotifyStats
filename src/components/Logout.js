import styled from "styled-components";
import { TextColor, ContainerBackground } from "../styles/sharedStyles";

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
  const handleClick = () => {
    window.localStorage.removeItem("params");
    window.location.reload();
  };

  return <LogoutButton onClick={handleClick}>Logout</LogoutButton>;
};

export default Logout;
