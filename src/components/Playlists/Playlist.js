import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { getPlaylist } from "../../spotify/apis";
import { ContainerBackground } from "../../styles/sharedStyles";
import DisplayTrack from "../DisplayTrack";

const Container = styled.div`
  width: 100%;
`;

const PlaylistInfo = styled.div`
  display: flex;
  ${ContainerBackground};

  & img {
    max-width: 100%;
    width: 200px;
    height: auto;
    border-radius: 10px;
    height: auto;
  }

  @media (max-width: 500px) {
    & img {
      width: 150px;
    }
  }

  & div {
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    margin-top: 25px;
  }

  & div h3 {
    margin-bottom: 20px;
    font-size: 25px;
  }

  & div p {
    font-size: 20px;
  }

  @media (max-width: 500px) {
    & img {
      width: 150px;
    }

    & div {
      margin-top: 0;
    }

    & div p {
      font-size: 15px;
    }
  }
`;

const PlaylistTracks = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 15px;
  grid-column-gap: 20px;
  ${ContainerBackground}

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
  }
`;

const Playlist = () => {
  const { playlistId } = useParams();
  const [playlistInfo, setPlaylistInfo] = useState([]);

  const getData = async () => {
    const data = await getPlaylist(playlistId);
    setPlaylistInfo(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const { description, imageUrl, items, name } = playlistInfo;

  const displayTracks =
    items &&
    items.map((data, index) => {
      const { track } = data;
      return <DisplayTrack key={index} data={track} />;
    });

  return (
    <Container
      data-aos="fade-down"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    >
      <PlaylistInfo>
        <img src={imageUrl} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </PlaylistInfo>
      <PlaylistTracks>{displayTracks}</PlaylistTracks>
    </Container>
  );
};

export default Playlist;
