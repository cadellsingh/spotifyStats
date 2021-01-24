import styled from "styled-components";
import { ContainerBackgroundColor } from "../styles/sharedStyles";

const LogoutButton = styled.button`
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  margin-top: 15px;
  ${ContainerBackgroundColor};
  cursor: pointer;

  :hover {
    border: 1px solid #05b075;
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
