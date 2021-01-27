import styled from "styled-components";
import { useState, useEffect } from "react";
import { ContainerBackground } from "../../styles/sharedStyles";
import { getCategoryPlaylists } from "../../spotify/apis";
import { Link } from "react-router-dom";

const Container = styled.div`
  ${ContainerBackground}

  & h3 {
    font-size: 22px;
  }
`;

const Playlists = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;

  & p:hover {
    text-decoration: underline;
  }
`;

const EachCategory = ({ categoryId, name }) => {
  const [playlists, setPlaylists] = useState([]);

  const getData = async () => {
    const data = await getCategoryPlaylists(categoryId);
    setPlaylists(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const displayPlaylistNames =
    playlists &&
    playlists.map((playlist, index) => {
      const { name: playlistName, id } = playlist;

      return (
        <Link to={`/playlist/${id}`}>
          <p key={index}>{playlistName}</p>
        </Link>
      );
    });

  return (
    <Container>
      <h3>{name}</h3>
      <Playlists>{displayPlaylistNames}</Playlists>
    </Container>
  );
};

export default EachCategory;
