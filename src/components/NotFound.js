import { Link } from "react-router-dom";
import styled from "styled-components";
import { TextColor } from "../styles/sharedStyles";

const Container = styled.div`
  display: grid;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  & a {
    font-weight: bold;
    font-size: 50px;
    ${TextColor};
  }

  & a:hover {
    text-decoration: underline;
  }
`;

const NotFound = () => {
  return (
    <Container
      data-aos="fade-down"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    >
      <p>
        Um, you look a bit lost... lets get you back{" "}
        <span>
          <Link to="/">home</Link>
        </span>
      </p>
    </Container>
  );
};

export default NotFound;
