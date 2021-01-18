import styled from "styled-components";

const StyledContainer = styled.div`
  grid-column: span 4 / auto;
  border: 1px solid purple;
`;

const TopTracks = () => {
  return (
    <StyledContainer>
      <p>top tracks</p>
    </StyledContainer>
  );
};

export default TopTracks;
