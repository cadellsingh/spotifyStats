// these components are used for TopArtists / Playlists

import styled from "styled-components";
import { ContainerBackgroundColor, TextColor } from "../styles/sharedStyles";

export const StyledContainer = styled.div`
  ${ContainerBackgroundColor}
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  grid-auto-rows: 20px auto auto;
  padding: 15px;
  border-radius: 10px;
  ${TextColor}

  & div:first-of-type {
    grid-column: span 2 / auto;
    display: flex;
    justify-content: space-between;
  }
`;
