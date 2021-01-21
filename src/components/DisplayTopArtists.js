import styled from "styled-components";

const Container = styled.div``;

const Img = styled.img`
  max-width: 100%;
  width: 100%;
  height: 30vh;
  object-fit: cover;
  border-radius: 15px;

  /* @media (max-width: 700px) {
    height: 40vh;
    height: auto;
  } */
`;

const DisplayTopArtists = ({ data }) => {
  const { name, images } = data;
  const { url } = images[0];

  return (
    <Container>
      <Img src={url} alt={name} />
      <p>{name}</p>
    </Container>
  );
};

export default DisplayTopArtists;
