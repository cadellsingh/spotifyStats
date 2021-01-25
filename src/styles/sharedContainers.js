import styled from "styled-components";
import { ContainerBackgroundColor } from "./sharedStyles";

// this container is used for TopArtists / Playlists
// on Profile page
export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 15px;
  border-radius: 10px;
  ${ContainerBackgroundColor};

  & div:first-of-type {
    grid-column: span 2 / auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & div:first-of-type p:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  & span:hover {
    text-decoration: underline;
  }
`;

// this is used for Top Tracks & Recently Played Tracks
// on Profile Page
export const TracksContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  padding: 15px;
  border-radius: 10px;
  ${ContainerBackgroundColor}

  & div:first-of-type {
    display: flex;
    align-items: center;
  }

  & div:first-of-type p:first-of-type {
    margin-right: 5px;
  }

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 800px) {
    grid-column: span 1 / auto;
  }
`;

// this is used for Top Tracks & Recently Played Tracks
// on Profile Page
export const TracksText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h2 {
    margin-right: 5px;
    margin-bottom: 15px;
  }

  & span:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
