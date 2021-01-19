import { useState, useEffect } from "react";
import { getUserPlaylists } from "../../spotify/apis";
import { StyledContainer } from "../../styles/styledContainer";
import DisplayImg from "../DisplayImg";
import styled from "styled-components";

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);

  const getData = async () => {
    const data = await getUserPlaylists(4);
    setPlaylists(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const displayPlaylists =
    playlists &&
    playlists.map((data, index) => {
      return <DisplayImg key={index} data={data} />;
    });

  return (
    <StyledContainer>
      <div>
        <p>Playlists</p>
        <p>See all</p>
      </div>
      {displayPlaylists}
    </StyledContainer>
  );
};

export default Playlists;
