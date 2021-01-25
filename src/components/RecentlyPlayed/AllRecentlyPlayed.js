import { useState, useEffect } from "react";
import styled from "styled-components";
import { getMyRecentlyPlayed } from "../../spotify/apis";
import { TextColor, ContainerBackground } from "../../styles/sharedStyles";
import DisplayTrack from "../DisplayTrack";

const Container = styled.div`
  & h2 {
    margin: auto 0;
    ${ContainerBackground};
    ${TextColor};
  }
`;

const TracksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 15px;
  grid-column-gap: 20px;
  margin-top: 15px;
  ${ContainerBackground};

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
      const { track } = data;
      return <DisplayTrack key={index} data={track} />;
    });

  return (
    <Container
      data-aos="fade-down"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    >
      <h2>Recently Played Tracks</h2>
      <TracksContainer>{displayTracks}</TracksContainer>
    </Container>
  );
};

export default AllRecentlyPlayed;
