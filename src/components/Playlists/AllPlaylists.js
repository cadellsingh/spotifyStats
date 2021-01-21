import styled from "styled-components";
import { ContainerBackgroundColor } from "../../styles/sharedStyles";
import GlobalTopPlaylists from "./GlobalTopPlaylists";
import UserPlaylists from "./UserPlaylists";

const Main = styled.div`
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
    <div>
      <Main>
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
      </Main>
    </div>
  );
};

export default AllPlaylists;
