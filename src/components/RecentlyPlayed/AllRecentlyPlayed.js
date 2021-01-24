import { useState, useEffect } from "react";
import styled from "styled-components";
import { getMyRecentlyPlayed } from "../../spotify/apis";
import { ContainerBackgroundColor, TextColor } from "../../styles/sharedStyles";
import DisplayTrack from "../DisplayTrack";

const Container = styled.div`
  border-radius: 10px;
  padding: 15px;
  margin: 0 auto;
  ${ContainerBackgroundColor}

  & h2 {
    margin: auto 0;
    ${TextColor};
  }
`;

const TracksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 15px;
  grid-column-gap: 20px;
  margin-top: 15px;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
  }
`;

const AllRecentlyPlayed = () => {
  const [recentTracks, setRecentTracks] = useState([]);

  const getData = async () => {
    const data = await getMyRecentlyPlayed(50);
    setRecentTracks(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const displayTracks =
    recentTracks &&
    recentTracks.map((data, index) => {
      return <DisplayTrack key={index} data={data} type="recent" />;
    });

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    >
      <Container>
        <h2>Recently Played Tracks</h2>
        <TracksContainer>{displayTracks}</TracksContainer>
      </Container>
    </div>
  );
};

export default AllRecentlyPlayed;
