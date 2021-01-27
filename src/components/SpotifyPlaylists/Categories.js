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
  justify-content: space-between;
  align-items: center;
`;

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    const data = await getAllCategories();
    setCategories(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const displayCategory =
    categories &&
    categories.map((data, index) => {
      const { id, name } = data;
      return <EachCategory key={index} categoryId={id} name={name} />;
    });

  return (
    <Container
    // data-aos="fade-down"
    // data-aos-duration="1500"
    // data-aos-easing="ease-in-out"
    >
      <Header>
        <h2>Spotify Playlists</h2>
        <p>search form</p>
      </Header>

      {displayCategory}
    </Container>
  );
};

export default Categories;
