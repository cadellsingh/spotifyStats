import styled from "styled-components";
import { ContainerBackgroundColor } from "../styles/sharedStyles";

const LogoutButton = styled.div`
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  margin-top: 15px;
  ${ContainerBackgroundColor};
`;

const Logout = () => {
  return (
    <LogoutButton>
      <p>Logout</p>
    </LogoutButton>
  );
};

export default Logout;
