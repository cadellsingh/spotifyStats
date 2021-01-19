import { useState, useEffect } from "react";
import styled from "styled-components";
import { getFollowedArtists, getUserInfo } from "../spotify/apis";
import { TextColor, ContainerBackgroundColor } from "../styles/sharedStyles";
import Header from "./Header";
import NavListItem from "./NavListItem";
import Logout from "./Logout";

const StyledNav = styled.nav`
  grid-row: span 2 / auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 10px;
  //display: none;
`;

const UserContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  border-radius: 10px;
  ${ContainerBackgroundColor}

  & img {
    max-width: 100%;
    height: 100px;
    border-radius: 100%;
    margin: 15px 0;
  }
`;

const StyledUl = styled.ul`
  padding: 20px;
  border-radius: 10px;
  ${ContainerBackgroundColor};
  text-align: left;
  list-style: none;
  font-size: 16px;
`;

const Nav = () => {
  const [userInfo, setUserInfo] = useState({});

  const getData = async () => {
    const { displayName, imageUrl } = await getUserInfo();

    setUserInfo({ displayName, imageUrl });
  };

  useEffect(() => {
    getData();
  }, []);

  const { displayName, imageUrl } = userInfo;

  // can create list icon component

  return (
    <StyledNav>
      <Header />

      <UserContainer>
        <p>{displayName}</p>
        <img src={imageUrl} alt={displayName} />
        {/*<span>*/}
        {/*  <FontAwesomeIcon icon={faUserAlt} />*/}
        {/*</span>*/}
      </UserContainer>
      <StyledUl>
        <NavListItem listItem="Profile" />
        <NavListItem listItem="Audio Analysis" />
        <NavListItem listItem="Playlists" />
        <NavListItem listItem="Top Tracks" />
        <NavListItem listItem="Top Artists" />
        <NavListItem listItem="Top Genres" />
      </StyledUl>

      <Logout />
    </StyledNav>
  );
};

export default Nav;

// add logout button
