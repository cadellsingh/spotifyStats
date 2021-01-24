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

const DisplayTrack = ({ data, type }) => {
  const { track } = data || {};

  const { artists, name, album, duration_ms } =
    type === "recent" ? track : data;

  const { images } = album;
  const { url } = images[0];
  const duration = millisToMinutesAndSeconds(duration_ms);

  const displayArtists = artists.map((artist, index) => {
    const { name } = artist;
    return <p key={index}>{name}</p>;
  });

  return (
    <StyledTrack>
      <div>
        {url ? (
          <Img src={url} alt={name} />
        ) : (
          <Icon>
            <FontAwesomeIcon icon={faMusic} />
          </Icon>
        )}
      </div>
      <div>
        <p>{name}</p>
        <Artists>{displayArtists}</Artists>
      </div>
      <Duration>{duration}</Duration>
    </StyledTrack>
  );
};

export default DisplayTrack;
