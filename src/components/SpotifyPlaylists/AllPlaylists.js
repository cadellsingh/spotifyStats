import styled from "styled-components";
import { useState, useEffect } from "react";
import { ContainerBackground } from "../../styles/sharedStyles";
import { getAllCategories } from "../../spotify/apis";
import EachCategory from "./EachCategory";

const AllPlaylists = () => {
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    const data = await getAllCategories();
    setCategories(data);
  };

  useEffect(() => {
    getData();
  }, []);

  let test = categories.slice(0, 1);

  const displayCategory =
    test &&
    test.map((data, index) => {
      const { id, name } = data;
      return <EachCategory key={index} categoryId={id} name={name} />;
    });

  return (
    <div>
      <div>{displayCategory}</div>
    </div>
  );
};

export default AllPlaylists;
