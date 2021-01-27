import styled from "styled-components";
import {
  ContainerBackgroundColor,
  ContainerBackground,
} from "../../styles/sharedStyles";
import Header from "../Header";
import NavListItem from "../NavListItem";
import Logout from "../Logout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

const StyledNav = styled.nav`
  grid-row: span 2 / auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 10px;
`;

const StyledUl = styled.ul`
  margin: 15px 0;
  ${ContainerBackground};
  text-align: left;
  list-style: none;
  font-size: 16px;
`;

const DesktopNav = ({ userInfo }) => {
  const { displayName, imageUrl } = userInfo;

  const displayImg = imageUrl ? (
    <img src={imageUrl} alt={displayName} />
  ) : (
    <span>
      <FontAwesomeIcon icon={faUserAlt} />
    </span>
  );

  return (
    <StyledNav>
      <Header />
      <StyledUl>
        <NavListItem listItem="Profile" link="" />
        <NavListItem listItem="Charts" link="/charts" />
        <NavListItem listItem="Spotify Playlists" link="/spotifyPlaylists" />
        <NavListItem listItem="New Releases" link="/newReleases" />

        <NavListItem listItem="Your Playlists" link="/playlists" />
        <NavListItem listItem="Your Top Tracks" link="/tracks" />
        <NavListItem listItem="Your Top Artists" link="/artists" />
        <NavListItem listItem="Recently Played" link="/recentlyPlayed" />
      </StyledUl>

      <Logout />
    </StyledNav>
  );
};

export default DesktopNav;
