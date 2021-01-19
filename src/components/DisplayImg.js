// used for displaying artist/playlist img in TopArtists / Playlists component

import styled from "styled-components";

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  max-width: 100%;
  height: 20vh;
  border-radius: 10px;
`;

const DisplayImg = ({ data }) => {
  const { name, images } = data;
  const { url } = images[0];

  return (
    <div>
      <Img src={url} alt={name} />
    </div>
  );
};

export default DisplayImg;
