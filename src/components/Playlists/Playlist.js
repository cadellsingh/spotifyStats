import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { getPlaylist } from "../../spotify/apis";
import { ContainerBackground } from "../../styles/sharedStyles";
import DisplayTrack from "../DisplayTrack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";
import { TwoGridContainer } from "../../styles/sharedContainers";
import _ from "lodash";
import Loading from "../Loading";

const Container = styled.div`
  width: 100%;
`;

const PlaylistInfo = styled.div`
  margin-bottom: 15px;
  display: flex;
  ${ContainerBackground};

  & img {
    max-width: 100%;
    width: 200px;
    height: auto;
    border-radius: 10px;
    height: auto;
  }

  & span {
    font-size: 120px;
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

    & div h3 {
      font-size: 22px;
    }
  }

  @media (max-width: 400px) {
    & img {
      width: 100px;
    }
  }
`;

const Playlist = () => {
  const { playlistId } = useParams();
  const [playlistInfo, setPlaylistInfo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getPlaylist(playlistId);
      setPlaylistInfo(data);
    };
    getData();
  }, []);

  const { description, imageUrl, items, name } = playlistInfo;

  const displayTracks =
    items &&
    items.map((data, index) => {
      const { track } = data;
      return <DisplayTrack key={index} data={track} />;
    });

  const displayImg = imageUrl ? (
    <img src={imageUrl} alt={name} />
  ) : (
    <span>
      <FontAwesomeIcon icon={faHeadphonesAlt} />
    </span>
  );

  return (
    <>
      {_.isEmpty(playlistInfo) ? (
        <Loading />
      ) : (
        <Container
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <PlaylistInfo>
            {displayImg}
            <div>
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
          </PlaylistInfo>

          <TwoGridContainer>{displayTracks}</TwoGridContainer>
        </Container>
      )}
    </>
  );
};

export default Playlist;
