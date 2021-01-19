import { useState, useEffect } from "react";
import styled from "styled-components";
import { getMyTopTracks } from "../../spotify/apis";
import EachTrack from "./EachTrack";
import { ContainerBackgroundColor, TextColor } from "../../styles/sharedStyles";

const TopTracksContainer = styled.div`
  grid-column: span 2 / auto;
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-columns:
  grid-row-gap: 15px; */
  width: 80%;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  ${ContainerBackgroundColor}

  & div:first-of-type {
    grid-column: span 2 / auto;
    display: flex;
    ${TextColor}
  }

  & div:first-of-type p:first-of-type {
    margin-right: 5px;
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
      <div>
        <p>Top Tracks</p>
        <p>See more</p>
      </div>
      {displayTracks}
    </TopTracksContainer>
  );
};

export default TopTracks;
