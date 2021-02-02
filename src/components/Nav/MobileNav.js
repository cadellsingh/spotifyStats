import styled from "styled-components";
import { useState } from "react";
import Header from "../Header";
import NavListItem from "../NavListItem";
import { handleLogout } from "../../utils/functions";
import { ContainerBackground } from "../../styles/sharedStyles";

const Links = styled.div`
  ${ContainerBackground};
  display: ${(props) => (props.openMenu ? "flex" : "none")};
  flex-direction: column;
  margin-top: 10px;
  & button {
    font-size: 15px;
    text-align: left;
  }
`;

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <Header toggleMenu={toggleMenu} />
      <Links openMenu={openMenu}>
        <NavListItem toggleMenu={toggleMenu} listItem="Profile" link="" />
        <NavListItem
          toggleMenu={toggleMenu}
          listItem="Your Playlists"
          link="/playlists"
        />
        <NavListItem
          toggleMenu={toggleMenu}
          listItem="Your Top Tracks"
          link="/tracks"
        />
        <NavListItem
          toggleMenu={toggleMenu}
          listItem="Your Top Artists"
          link="/artists"
        />
        <NavListItem
          toggleMenu={toggleMenu}
          listItem="Recently Played"
          link="/recentlyPlayed"
        />
        <NavListItem
          toggleMenu={toggleMenu}
          listItem="Spotify Playlists"
          link="/spotifyPlaylists"
        />
        <NavListItem
          toggleMenu={toggleMenu}
          listItem="New Releases"
          link="/newReleases"
        />
        <button onClick={handleLogout}>Logout</button>
      </Links>
    </div>
  );
};

export default MobileNav;
