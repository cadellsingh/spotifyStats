import styled from "styled-components";
import { useState, useEffect } from "react";
import { ContainerBackground } from "../../styles/sharedStyles";
import { getCategoryPlaylists } from "../../spotify/apis";
import { Link } from "react-router-dom";

const Container = styled.div`
  ${ContainerBackground};

  & h3 {
    font-size: 22px;
  }
`;

const Playlists = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;

  & span:hover {
    text-decoration: underline;
  }

  @media (min-width: 1500px) {
    span {
      font-size: 18px;
    }
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const category = (arr) => {
  const temp =
    arr &&
    arr.map((playlist, index) => {
      const { name: playlistName, id } = playlist;

      return (
        <Link key={index} to={`/playlist/${id}`}>
          <span>{playlistName}</span>
        </Link>
      );
    });

  return temp;
};

const EachCategory = ({ categoryId, name, query }) => {
  const [playlists, setPlaylists] = useState([]);

  const getData = async () => {
    const data = await getCategoryPlaylists(categoryId);
    setPlaylists(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const filter = playlists.filter((playlist) => {
    const { name: playlistName } = playlist;
    return playlistName.toLowerCase().includes(query.toLowerCase());
  });

  const displayCategory = query === "" ? category(playlists) : category(filter);

  return (
    <>
      {displayCategory.length !== 0 && (
        <Container>
          <h3>{name}</h3>
          <Playlists>{displayCategory}</Playlists>
        </Container>
      )}
    </>
  );
};

export default EachCategory;
