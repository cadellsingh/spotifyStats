import styled from "styled-components";
import { useState, useEffect } from "react";
import { ContainerBackground } from "../../styles/sharedStyles";
import { getArtistTopTracks } from "../../spotify/apis";
import DisplayTrack from "../DisplayTrack";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 15px;
  ${ContainerBackground};
`;

const ArtistTopTracks = ({ artistId }) => {
  const [topTracks, setTopTracks] = useState([]);

  const getData = async () => {
    const data = await getArtistTopTracks(artistId, "US");
    setTopTracks(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const displayTracks =
    topTracks &&
    topTracks.map((data, index) => {
      return <DisplayTrack key={index} data={data} />;
    });

  return (
    <div>
      <h3>Top Tracks</h3>
      {topTracks.length > 0 ? <Container>{displayTracks}</Container> : null}
    </div>
  );
};

export default ArtistTopTracks;
