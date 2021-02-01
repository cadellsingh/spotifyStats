import styled from "styled-components";
import { useState } from "react";
import Header from "../Header";
import NavListItem from "../NavListItem";
import { slide as Menu } from "react-burger-menu";
import { handleLogout } from "../../utils/functions";

const styles = {
  bmBurgerButton: {
    position: "absolute",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#05b075",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    fontSize: "1.15em",
  },
  bmItemList: {
    color: "white",
    padding: "0.8em",
  },
  bmItem: {
    background: "#202225",
    display: "flex",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const Links = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  outline: none;
  border-radius: 10px;
  margin-top: 10px;

  & button {
    font-size: 15px;
    text-align: left;
  }
`;

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <Header setOpenMenu={setOpenMenu} />
      <Menu right styles={styles}>
        <Links>
          <NavListItem
            onClick={() => setOpenMenu(false)}
            listItem="Profile"
            link=""
          />
          <NavListItem listItem="Your Playlists" link="/playlists" />
          <NavListItem listItem="Your Top Tracks" link="/tracks" />
          <NavListItem listItem="Your Top Artists" link="/artists" />
          <NavListItem listItem="Recently Played" link="/recentlyPlayed" />
          <NavListItem listItem="Spotify Playlists" link="/spotifyPlaylists" />
          <NavListItem listItem="New Releases" link="/newReleases" />
          <button onClick={handleLogout}>Logout</button>
        </Links>
      </Menu>
    </div>
  );
};

export default MobileNav;
