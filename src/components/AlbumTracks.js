import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAlbum, getAlbumTracks } from "../spotify/apis";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";
import { ContainerBackground } from "../styles/sharedStyles";
import DisplayTrack from "./DisplayTrack";
import { TwoGridContainer } from "../styles/sharedContainers";
import _ from "lodash";
import Loading from "./Loading";

const Container = styled.div``;

const AlbumInfo = styled.div`
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
`;

const AlbumTracks = () => {
  const { albumId } = useParams();
  const [albumTracks, setAlbumTracks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const tracks = await getAlbumTracks(albumId);
      const data = await getAlbum(albumId);
      const { name, release_date, total_tracks, images } = data;
      const { url: imageUrl } = images[0];
      setAlbumTracks({ name, release_date, total_tracks, tracks, imageUrl });
    };
    getData();
  }, []);

  const { name, release_date, total_tracks, tracks, imageUrl } = albumTracks;

  console.log(albumTracks);

  const displayImg = imageUrl ? (
    <img src={imageUrl} alt={name} />
  ) : (
    <span>
      <FontAwesomeIcon icon={faHeadphonesAlt} />
    </span>
  );

  const displayTracks =
    tracks &&
    tracks.map((track, index) => {
      return <DisplayTrack key={index} data={track} />;
    });

  return (
    <>
      {_.isEmpty(albumTracks) ? (
        <Loading />
      ) : (
        <Container
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <AlbumInfo>
            {displayImg}
            <div>
              <h3>{name}</h3>
              <p>Release Date: {release_date}</p>
              <p>Total number of tracks: {total_tracks}</p>
            </div>
          </AlbumInfo>

          <TwoGridContainer>{displayTracks}</TwoGridContainer>
        </Container>
      )}
    </>
  );
};

export default AlbumTracks;
