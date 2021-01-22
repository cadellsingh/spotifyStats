import styled from "styled-components";
import { ContainerBackgroundColor } from "../../styles/sharedStyles";
import GlobalTopPlaylists from "./GlobalTopPlaylists";
import UserPlaylists from "./UserPlaylists";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;
`;

const PlaylistsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 15px;
  border-radius: 10px;
  grid-gap: 15px;
  ${ContainerBackgroundColor};

  & h2 {
    grid-column: span 2 / auto;
  }
`;

const AllPlaylists = () => {
  return (
    <div
      data-aos="zoom-out-up"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    >
      <Container>
        <div>
          <PlaylistsContainer>
            <h2>Your Playlists</h2>
            <UserPlaylists />
          </PlaylistsContainer>
        </div>
        <div>
          <PlaylistsContainer>
            <h2>Global Top Playlists</h2>
            <GlobalTopPlaylists />
          </PlaylistsContainer>
        </div>
      </Container>
    </div>
  );
};

export default AllPlaylists;
