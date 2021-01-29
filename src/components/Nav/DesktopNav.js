import styled from "styled-components";
import { ContainerBackground } from "../../styles/sharedStyles";
import Header from "../Header";
import NavListItem from "../NavListItem";
import Logout from "../Logout";

const StyledNav = styled.nav`
  position: fixed;
  width: 230px;

  @media (max-width: 800px) {
    width: 200px;
  }
`;

const StyledUl = styled.ul`
  ${ContainerBackground};
  text-align: left;
  list-style: none;
  font-size: 16px;
  margin-bottom: 15px;
`;

const User = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  ${ContainerBackground};

  & p:first-child {
    margin-right: 5px;
  }
`;

const DesktopNav = ({ userName }) => {
  return (
    <StyledNav>
      <Header />
      <User>
        <p>Hi 👋🏽, </p>
        <p>{userName}</p>
      </User>
      <StyledUl>
        <NavListItem listItem="Profile" link="" />

        <NavListItem listItem="Your Playlists" link="/playlists" />
        <NavListItem listItem="Your Top Tracks" link="/tracks" />
        <NavListItem listItem="Your Top Artists" link="/artists" />
        <NavListItem listItem="Recently Played" link="/recentlyPlayed" />

        <NavListItem listItem="Charts" link="/charts" />
        <NavListItem listItem="Spotify Playlists" link="/spotifyPlaylists" />
        <NavListItem listItem="New Releases" link="/newReleases" />
        <NavListItem listItem="Vibe Out" link="/vibeOut" />
      </StyledUl>

      <Logout />
    </StyledNav>
  );
};

export default DesktopNav;
