import { useState, useEffect } from "react";
import styled from "styled-components";
import { getMyTopArtists } from "../../spotify/apis";
import { StyledContainer } from "../../styles/styledContainer";
import DisplayImg from "../DisplayImg";

const TopArtists = () => {
  const [topArtists, setTopArtists] = useState([]);

  const getData = async () => {
    const data = await getMyTopArtists(6);
    setTopArtists(data);
  };

  useEffect(() => {
    getData();
  }, []);

  // can prob send images & and display image based on size
  const displayArtists =
    topArtists &&
    topArtists.map((data, index) => {
      const { name, images } = data;
      const { url } = images[0];

      return <DisplayImg key={index} img={url} />;
    });

  return (
    <StyledContainer>
      <p>TopArtists</p>
      {displayArtists}
    </StyledContainer>
  );
};

export default TopArtists;
