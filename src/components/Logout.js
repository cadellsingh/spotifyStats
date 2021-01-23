import styled from "styled-components";
import { ContainerBackgroundColor } from "../styles/sharedStyles";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  const handleClick = () => {
    window.localStorage.removeItem("expiry_time");
    return history.push("/");
  };

  return <LogoutButton onClick={handleClick}>Logout</LogoutButton>;
};

export default Logout;
