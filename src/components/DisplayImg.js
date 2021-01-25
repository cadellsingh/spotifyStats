// used for displaying artist/playlist img in TopArtists / Playlists component

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ImgContainer = styled.div`
  cursor: pointer;
  /* text-align: center; */
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    border: 1px solid red;
    width: 100%;
    font-size: 50px;
  }
`;

const Img = styled.img`
  max-width: 100%;
  width: 100%;
  height: 30vh;
  object-fit: cover;
  border-radius: 15px;
`;

const DisplayImg = ({ data, type }) => {
  const { name, images, id } = data || {};

  let displayImg;

  if (images && images.length > 0) {
    const { url } = images[0];
    displayImg = <Img src={url} alt={name} />;
  } else {
    displayImg = (
      <span>
        <FontAwesomeIcon icon={faUserAlt} />
      </span>
    );
  }

  console.log(images);

  const linkUrl = type === "artist" ? `artist/${id}` : `playlist/${id}`;

  return (
    <Link to={linkUrl}>
      <ImgContainer>
        {/* <Img src={test} alt={name} /> */}
        {displayImg}
      </ImgContainer>
    </Link>
  );
};

export default DisplayImg;
