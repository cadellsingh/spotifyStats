import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { millisToMinutesAndSeconds } from "../utils/functions";

const StyledTrack = styled.div`
  display: flex;
  align-items: center;

  opacity: ${(props) => (props.preview ? ".8" : ".5")};

  :hover {
    opacity: ${(props) => (props.preview ? "1" : ".5")};
    cursor: ${(props) => (props.preview ? "pointer" : "default")};
  }

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

const Artists = styled.p`
  display: flex;
  flex-wrap: wrap;
`;

const SongName = styled.p`
  display: flex;
  flex-wrap: wrap;
`;

const Duration = styled.p`
  margin-left: auto;
`;

const DisplayTrack = ({ data }) => {
  const { artists, name, album, duration_ms, preview_url } = data || {};
  let audio = new Audio(preview_url);

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
    artists.map((artist) => {
      const { name } = artist;
      return name;
    });

  const handleOnMouseEnter = () => audio.play();

  const displayTrack = images ? (
    <StyledTrack
      preview={preview_url}
      onMouseEnter={preview_url && handleOnMouseEnter}
      onMouseLeave={() => audio.pause()}
    >
      <div>{displayImg}</div>
      <div>
        <SongName>{name}</SongName>
        <Artists>{displayArtists.join(" ")}</Artists>
      </div>
      <Duration>{duration}</Duration>
    </StyledTrack>
  ) : null;

  return <> {displayTrack}</>;
};

export default DisplayTrack;
