import { useState, useEffect } from "react";
import styled from "styled-components";
import { getMyTopArtists } from "../../spotify/apis";
import { StyledContainer } from "../../styles/styledContainer";
import DisplayImg from "../DisplayImg";

const TopArtists = () => {
  const [topArtists, setTopArtists] = useState([]);

  const getData = async () => {
    const data = await getMyTopArtists(4);
    setTopArtists(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const displayArtists =
    topArtists &&
    topArtists.map((data, index) => {
      return <DisplayImg key={index} data={data} />;
    });

  return (
    <StyledContainer>
      <div>
        <p>Top Artists</p>
        <p>See all</p>
      </div>
      {displayArtists}
    </StyledContainer>
  );
};

export default TopArtists;
