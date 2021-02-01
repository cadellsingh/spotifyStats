import { loginUrl } from "../spotify/loginUrl";
import styled from "styled-components";
import { ContainerBackground, TextColor } from "../styles/sharedStyles";

const Container = styled.div`
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 25px;
  text-align: center;

  & h1 {
    ${TextColor};
  }

  & p {
    margin: 25px 0;
  }

  @media (max-width: 500px) {
    & h1 {
      font-size: 45px;
    }

    & p {
      font-size: 20px;
    }
  }

  @media (max-width: 400px) {
    & h1 {
      font-size: 35px;
    }
  }
`;

const Button = styled.button`
  ${ContainerBackground};

  :hover {
    cursor: pointer;
    ${TextColor};
  }
`;

const Login = () => {
  const handleClick = () => {
    window.location = loginUrl;
  };

  return (
    <Container>
      <div>
        <h1>Your Spotify Stats</h1>
        <p>See what and who you listen to the most on Spotify!</p>
        <Button type="submit" onClick={handleClick}>
          Log in with Spotify
        </Button>
      </div>
    </Container>
  );
};

export default Login;
