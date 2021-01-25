// used for displaying artist/playlist img in TopArtists / Playlists component

import { Link } from "react-router-dom";
import styled from "styled-components";

const ImgContainer = styled.div`
  cursor: pointer;
`;

const Img = styled.img`
  max-width: 100%;
  width: 100%;
  height: 30vh;
  object-fit: cover;
  border-radius: 15px;
`;

const DisplayImg = ({ data, type }) => {
  const { name, images, id } = data;
  const { url } = images[0];
  const linkUrl = type === "artist" ? `artist/${id}` : `playlist/${id}`;

  return (
    <Link to={linkUrl}>
      <ImgContainer>
        <Img src={url} alt={name} />
      </ImgContainer>
    </Link>
  );
};

// to={`${linkUrl}/${id}`}

export default DisplayImg;
