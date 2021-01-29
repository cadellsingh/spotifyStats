import styled from "styled-components";
import { useState, useEffect } from "react";
import { ContainerBackground } from "../../styles/sharedStyles";
import { getAllCategories } from "../../spotify/apis";
import EachCategory from "./EachCategory";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-row-gap: 15px;
`;

const Header = styled.div`
  ${ContainerBackground};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    & h2 {
      margin: 0 auto;
    }
  }
`;

const Input = styled.input`
  background-color: #17181c;
  border-radius: 10px;
  padding: 15px;
  outline: none;
  border: none;
  font-size: 16px;
  color: white;

  ::placeholder {
    color: white;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin-top: 10px;
  }
`;

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState("");

  const getData = async () => {
    const data = await getAllCategories();
    setCategories(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const displayCategories =
    categories &&
    categories.map((data, index) => {
      const { id, name } = data;
      return (
        <EachCategory key={index} categoryId={id} name={name} query={query} />
      );
    });

  return (
    <Container
      data-aos="fade-down"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    >
      <Header>
        <h2>Spotify Playlists</h2>
        <Input
          aria-label="Filter"
          type="text"
          placeholder="Filter"
          onChange={(event) => setQuery(event.target.value)}
          value={query}
        />
      </Header>

      {displayCategories}
    </Container>
  );
};

export default Categories;
