import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { searchItem } from "../../spotify/apis";
import { ContainerBackground } from "../../styles/sharedStyles";
import Albums from "./Albums";
import Artists from "./Artists";
import Tracks from "./Tracks";
import Playlists from "./Playlists";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;

  & h2 {
    grid-column: span 2 / auto;
    ${ContainerBackground}
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;

    & h2 {
      grid-column: span 1 / auto;
    }
  }
`;

const Results = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await searchItem(query);
      setResults(data);
    };
    getData();
  }, []);

  const { albums, artists, playlists, tracks } = results;

  return (
    <Container
      data-aos="fade-down"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    >
      <h2>{query}</h2>
      <Artists artists={artists} />
      <Playlists playlists={playlists} />
      <Tracks tracks={tracks} />
      <Albums albums={albums} />
    </Container>
  );
};

export default Results;
