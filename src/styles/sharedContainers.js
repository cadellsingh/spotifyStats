import styled from "styled-components";
import { ContainerBackground } from "./sharedStyles";

export const OneGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  ${ContainerBackground};
`;

export const TwoGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 15px;
  grid-column-gap: 20px;
  ${ContainerBackground};

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
  }
`;

export const ThreeGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  ${ContainerBackground};

  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
  }
`;

// use for top artists / playlists on profile page
export const SeeMoreText = styled.div`
  grid-column: span 3 / auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  & span:hover {
    text-decoration: underline;
  }

  @media (max-width: 450px) {
    grid-column: span 2 / auto;
  }
`;

// use for top tracks / recently played on profile page
export const SeeMoreText2 = styled(SeeMoreText)`
  grid-column: span 1 / auto;
`;

export const SixGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  ${ContainerBackground};

  @media (max-width: 1000px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
  }
`;
