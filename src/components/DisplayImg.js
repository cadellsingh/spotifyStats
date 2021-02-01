import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import Img from "react-cool-img";

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

const DisplayImg = ({ data, type, setReloadArtist }) => {
  const { path } = useRouteMatch();
  const { name, images, id } = data || {};

  let displayImg;

  if (images && images.length > 0) {
    const { url } = images[0];
    displayImg = (
      <Img
        style={{
          maxWidth: "100%",
          width: "100%",
          height: "25vh",
          objectFit: "cover",
          borderRadius: "15px",
        }}
        cache
        lazy
        src={url}
        alt={name}
      />
    );
  } else {
    displayImg = (
      <Icon>
        <span>
          <FontAwesomeIcon icon={faHeadphonesAlt} />
        </span>
      </Icon>
    );
  }

  const linkUrl = {
    artist: `/artist/${id}`,
    playlist: `/playlist/${id}`,
    album: `/album/${id}`,
  }[type];

  const handleOnClick = () => {
    if (path === "/artist/:artistId") {
      setReloadArtist(true);
    }
  };

  return (
    <Link to={linkUrl} onClick={handleOnClick}>
      <ImgContainer>{displayImg}</ImgContainer>
    </Link>
  );
};

export default DisplayImg;
