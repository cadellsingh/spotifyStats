import styled from "styled-components";
import { ContainerBackgroundColor, TextColor } from "../styles/sharedStyles";

const LogoutButton = styled.button`
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  margin-top: 15px;
  ${ContainerBackgroundColor};
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
