// used for displaying artist/playlist img in TopArtists / Playlists component

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

const ImgContainer = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;

  :hover {
    transition: ease-in 0.4s;
    opacity: 0.6;
  }
`;

const Icon = styled.div`
  width: 100%;
  height: 100%;
  font-size: 150px;
  text-align: center;

  & span {
    margin: auto;
  }

  @media (max-width: 450px) {
    font-size: 100px;
  }
`;

const Img = styled.img`
  max-width: 100%;
  width: 100%;
  height: 25vh;
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
      <Icon>
        <span>
          <FontAwesomeIcon icon={faHeadphonesAlt} />
        </span>
      </Icon>
    );
  }

  const linkUrl = type === "artist" ? `/artist/${id}` : `/playlist/${id}`;

  // i could prob pass a prop saying to include link or no

  return (
    <Link to={linkUrl}>
      <ImgContainer>{displayImg}</ImgContainer>
    </Link>
  );
};

export default DisplayImg;
