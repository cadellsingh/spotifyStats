import styled from "styled-components";
import { ContainerBackground } from "../../styles/sharedStyles";
import GlobalTopPlaylists from "./GlobalTopPlaylists";
import UserPlaylists from "./UserPlaylists";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;

  & div h2 {
    grid-column: span 2 / auto;
    ${ContainerBackground};
  }

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

const PlaylistsContainer = styled.div`
  margin: 15px 0;
  ${ContainerBackground};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
`;

const AllPlaylists = () => {
  return (
    <Container
      data-aos="fade-down"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    >
      <div>
        <h2>Your Playlists</h2>
        <PlaylistsContainer>
          <UserPlaylists />
        </PlaylistsContainer>
      </div>
      <div>
        <h2>Global Top Playlists</h2>
        <PlaylistsContainer>
          <GlobalTopPlaylists />
        </PlaylistsContainer>
      </div>
    </Container>
  );
};

export default AllPlaylists;
