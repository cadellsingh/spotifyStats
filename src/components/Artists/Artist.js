import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  getArtist,
  getArtistRelatedArtists,
  getArtistTopTracks,
} from "../../spotify/apis";
import { ContainerBackground } from "../../styles/sharedStyles";
import DisplayTrack from "../DisplayTrack";
import DisplayImg from "../DisplayImg";
import { formatNumber } from "../../utils/functions";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;

  & h2 {
    ${ContainerBackground};
    margin: 15px 0;
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const ArtistDetails = styled.div`
  display: flex;
  ${ContainerBackground};

  & img {
    max-width: 100%;
    width: 200px;
    height: auto;
    border-radius: 10px;
    height: auto;
  }

  & div {
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    margin-top: 25px;
  }
`;

const ArtistTracks = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 15px;
  ${ContainerBackground};
`;

const RelatedArtists = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  ${ContainerBackground};
`;

const Artist = () => {
  const { artistId } = useParams();
  const [artistInfo, setArtistInfo] = useState([]);

  const getData = async () => {
    const { followers, genres, imageUrl, name } = await getArtist(artistId);
    const topTracks = await getArtistTopTracks(artistId, "US");
    const relatedArtists = await getArtistRelatedArtists(artistId);
    setArtistInfo({
      followers,
      genres,
      imageUrl,
      name,
      topTracks,
      relatedArtists,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const {
    followers,
    genres,
    imageUrl,
    name,
    topTracks,
    relatedArtists,
  } = artistInfo;

  console.log(genres);

  // const { total } = followers;

  const displayTracks =
    topTracks &&
    topTracks.map((data, index) => {
      return <DisplayTrack key={index} data={data} />;
    });

  const displayRelatedArtists =
    relatedArtists &&
    relatedArtists.slice(0, 10).map((data, index) => {
      return <DisplayImg key={index} data={data} type="artist" />;
    });

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    >
      <ArtistDetails>
        <img src={imageUrl} alt={name} />
        <div>
          {/* data is undefined */}
          <h3>{name}</h3>
          {/* <p>Followers: {formatNumber(total)}</p> */}
          <p>Genres: {genres.join(", ")}</p>
        </div>
      </ArtistDetails>
      <Container>
        <div>
          <h2>Current Top Tracks</h2>
          <div>
            <ArtistTracks>{displayTracks}</ArtistTracks>
          </div>
        </div>
        <div>
          <h2>Related Artists</h2>
          <RelatedArtists>{displayRelatedArtists}</RelatedArtists>
        </div>
      </Container>
    </div>
  );
};

export default Artist;
