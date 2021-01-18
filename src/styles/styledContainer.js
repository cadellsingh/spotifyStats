import styled from "styled-components";

// these components are used for TopArtists / Playlists

export const StyledContainer = styled.div`
  /* margin-top: 20px; */
  grid-column: span 2 / auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 20px auto;
  grid-gap: 10px;
  height: 100%;
  padding: 15px;
  background-color: lightblue;
  border-radius: 15px;

  & p:first-of-type {
    grid-column: span 3 / auto;
  }
`;
