import { useState, useEffect } from "react";
import styled from "styled-components";
import { getMyRecentlyPlayed } from "../../spotify/apis";
import { TwoGridContainer } from "../../styles/sharedContainers";
import { TextColor, ContainerBackground } from "../../styles/sharedStyles";
import DisplayTrack from "../DisplayTrack";
import Loading from "../Loading";

const Container = styled.div`
  & h2 {
    margin: auto 0;
    margin-bottom: 15px;
    ${ContainerBackground};
    ${TextColor};
  }
`;

const AllRecentlyPlayed = () => {
  const [recentTracks, setRecentTracks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getMyRecentlyPlayed(50);
      setRecentTracks(data);
    };
    getData();
  }, []);

  const displayTracks =
    recentTracks &&
    recentTracks.map((data, index) => {
      const { track } = data;
      return <DisplayTrack key={index} data={track} />;
    });

  return (
    <>
      {recentTracks.length > 0 ? (
        <Container
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <h2>Recently Played Tracks</h2>
          <TwoGridContainer>{displayTracks}</TwoGridContainer>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default AllRecentlyPlayed;
