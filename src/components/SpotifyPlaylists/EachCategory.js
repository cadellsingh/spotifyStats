import styled from "styled-components";
import { useState, useEffect } from "react";
import { ContainerBackground } from "../../styles/sharedStyles";
import { getAllCategories, getCategoryPlaylists } from "../../spotify/apis";

const EachCategory = ({ categoryId, name }) => {
  const [playlists, setPlaylists] = useState([]);

  const getData = async () => {
    const data = await getCategoryPlaylists(categoryId);
    setPlaylists(data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(playlists);

  return <div>categories</div>;
};

export default EachCategory;
