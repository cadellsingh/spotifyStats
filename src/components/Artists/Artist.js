import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { getArtist } from "../../spotify/apis";
import { ContainerBackground } from "../../styles/sharedStyles";
import { formatNumber } from "../../utils/functions";
import ArtistTopTracks from "./ArtistTopTracks";
import RelatedArtists from "./RelatedArtists";
import Img from "react-cool-img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";
import Loading from "../Loading";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  grid-column-gap: 15px;

  & h3 {
    ${ContainerBackground};
    font-size: 22px;
    margin: 15px 0;
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const ArtistDetails = styled.div`
  grid-column: span 2 / auto;
  ${ContainerBackground};

  & div:first-child {
    display: flex;
  }

  & div:first-child div {
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    margin-top: 25px;
  }

  & h2 {
    font-size: 25px;
    text-align: left;
  }

  & p {
    font-size: 20px;
  }

  & p:first-of-type {
    margin: 6px 0;
  }
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

    & p {
      font-size: 16px;
    }
  }
`;

const Icon = styled.div`
  font-size: 100px;
  text-align: center;

  @media (max-width: 450px) {
    font-size: 100px;
  }
`;

const Artist = () => {
  const { artistId } = useParams();
  const [artistInfo, setArtistInfo] = useState([]);
  const [reloadArtist, setReloadArtist] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const { total, genres, imageUrl, name } = await getArtist(artistId);
      setArtistInfo({
        total,
        genres,
        imageUrl,
        name,
      });
    };
    getData();
  }, []);

  useEffect(() => {
    if (reloadArtist) {
      window.location.reload();
      setReloadArtist(false);
    }
  }, [reloadArtist]);

  const { total, genres, imageUrl, name } = artistInfo;

  const displayImg = imageUrl ? (
    <Img
      style={{
        maxWidth: "100%",
        width: "200px",
        height: "auto",
        borderRadius: "10px",
      }}
      src={imageUrl}
      alt={name}
    />
  ) : (
    <Icon>
      <span>
        <FontAwesomeIcon icon={faHeadphonesAlt} />
      </span>
    </Icon>
  );

  return (
    <>
      {_.isEmpty(artistInfo) ? (
        <Loading />
      ) : (
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <ArtistDetails>
            <div>
              {displayImg}
              <div>
                <h2>{name}</h2>
                <p>Followers: {formatNumber(total)}</p>
                <p>{genres && genres.join(", ")}</p>
              </div>
            </div>
          </ArtistDetails>
          <Container>
            <ArtistTopTracks artistId={artistId} />
            <RelatedArtists
              artistId={artistId}
              setReloadArtist={setReloadArtist}
            />
          </Container>
        </div>
      )}
    </>
  );
};

export default Artist;
