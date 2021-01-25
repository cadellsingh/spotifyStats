import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { millisToMinutesAndSeconds } from "../utils/functions";

const StyledTrack = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

const Icon = styled.span`
  font-size: 35px;
  margin-right: 15px;
`;

const Img = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 5px;
  margin-right: 15px;
`;

const Artists = styled.div`
  display: flex;
`;

const Duration = styled.p`
  margin-left: auto;
`;

const DisplayTrack = ({ data }) => {
  const { artists, name, album, duration_ms } = data || {};

  const { images } = album || {};
  let displayImg;

  if (images && images.length > 0) {
    const { url } = images[0];
    displayImg = <Img src={url} alt={name} />;
  } else {
    displayImg = (
      <Icon>
        <FontAwesomeIcon icon={faMusic} />
      </Icon>
    );
  }

  const duration = millisToMinutesAndSeconds(duration_ms);

  const displayArtists =
    artists &&
    artists.map((artist, index) => {
      const { name } = artist;
      return <p key={index}>{name}</p>;
    });

  const displayTrack = images ? (
    <StyledTrack>
      <div>{displayImg}</div>
      <div>
        <p>{name}</p>
        <Artists>{displayArtists}</Artists>
      </div>
      <Duration>{duration}</Duration>
    </StyledTrack>
  ) : null;

  return <> {displayTrack}</>;
};

export default DisplayTrack;
