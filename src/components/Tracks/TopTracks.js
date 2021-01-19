import { useState, useEffect } from "react";
import styled from "styled-components";
import { getMyTopTracks } from "../../spotify/apis";
import EachTrack from "./EachTrack";
import { ContainerBackgroundColor, TextColor } from "../../styles/sharedStyles";

const TopTracksContainer = styled.div`
  grid-column: span 2 / auto;
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  padding: 15px;
  border-radius: 10px;
  ${ContainerBackgroundColor}

  & div:first-of-type {
    display: flex;
    align-items: center;
  }

  & div:first-of-type p:first-of-type {
    margin-right: 5px;
  }

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 800px) {
    grid-column: span 1 / auto;
  }
`;

const TracksText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${TextColor};

  & h2 {
    margin-right: 5px;
  }

  & p:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const TopTracks = () => {
  const [topTracks, setTopTracks] = useState([]);

  const getData = async () => {
    const data = await getMyTopTracks(10);
    setTopTracks(data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(topTracks);

  const displayTracks =
    topTracks &&
    topTracks.map((data, index) => {
      return <EachTrack key={index} data={data} />;
    });

  return (
    <TopTracksContainer>
      <TracksText>
        <h2>Top Tracks</h2>
        <p>See all</p>
      </TracksText>
      {displayTracks}
    </TopTracksContainer>
  );
};

export default TopTracks;
