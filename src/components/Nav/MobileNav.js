import styled from "styled-components";
import { useState } from "react";
import Header from "../Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import NavListItem from "../NavListItem";
import { ContainerBackgroundColor } from "../../styles/sharedStyles";

const StyledNav = styled.div``;

const Overlay = styled.div`
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  display: ${(props) => (props.showLinks ? "block" : "none")};
`;

const MobileLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 30px;
  text-align: center;
  font-size: 35px;

  & span {
    margin-left: auto;
    font-size: 20px;
  }
`;

const MobileNav = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <StyledNav>
      <Header setShowLinks={setShowLinks} />
      <Overlay showLinks={showLinks}>
        <MobileLinks>
          <span onClick={() => setShowLinks(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
          <NavListItem listItem="Profile" link="" />
          <NavListItem listItem="Audio Analysis" link="/audioAnalysis" />
          <NavListItem listItem="Playlists" link="/playlists" />
          <NavListItem listItem="Top Tracks" link="/topTracks" />
          <NavListItem listItem="Top Artists" link="/topArtists" />
          <NavListItem listItem="Top Genres" link="/topGenres" />
          <NavListItem listItem="Recently Played" link="/recentlyPlayed" />
        </MobileLinks>
      </Overlay>
    </StyledNav>
  );
};

export default MobileNav;
