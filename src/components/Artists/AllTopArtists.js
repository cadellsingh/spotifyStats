import { useState, useEffect } from "react";
import styled from "styled-components";
import { getMyTopArtists } from "../../spotify/apis";
import { ContainerBackgroundColor, TextColor } from "../../styles/sharedStyles";
import DisplayTopArtists from "../DisplayTopArtists";

const Container = styled.div`
  border-radius: 10px;
  padding: 15px;
  ${ContainerBackgroundColor}
`;

const Text = styled.div`
  margin-bottom: 15px;

  & h2 {
    ${TextColor}
    margin-bottom: 15px;
  }

  & ul {
    display: flex;
  }

  & ul li {
    cursor: pointer;
  }

  & ul li:hover {
    text-decoration: underline;
  }

  & ul li:nth-child(2n) {
    margin: 0 20px;
  }
`;

const ArtistsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  text-align: center;
  grid-gap: 10px;
  grid-column-gap: 10px;
  grid-row-gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const AllTopArtists = () => {
  const [topArtists, setTopArtists] = useState([]);

  const getData = async () => {
    const data = await getMyTopArtists(50, "long_term");
    setTopArtists(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const displayArtists =
    topArtists &&
    topArtists.map((data, index) => {
      return <DisplayTopArtists key={index} data={data} />;
    });

  const handleClick = (type) => {};

  return (
    <Container>
      <Text>
        <h2>Top Artists</h2>
        <ul>
          <li>All time</li>
          <li>Last 6 months</li>
          <li>Last month</li>
        </ul>
      </Text>
      <ArtistsContainer>{displayArtists}</ArtistsContainer>
    </Container>
  );
};

export default AllTopArtists;
