// used for displaying artist/playlist img in TopArtists / Playlists component

import styled from "styled-components";

const Img = styled.img`
  max-width: 100%;
  width: 100%;
  height: 30vh;
  object-fit: cover;
  border-radius: 15px;

  /* @media (max-width: 850px) {
    height: 20vh;
  }

  @media (max-width: 700px) {
    height: 50vh;
  } */
`;

const ImgContainer = styled.div``;

const DisplayImg = ({ data }) => {
  const { name, images } = data;
  const { url } = images[0];

  return (
    <ImgContainer>
      <Img src={url} alt={name} />
    </ImgContainer>
  );
};

export default DisplayImg;
