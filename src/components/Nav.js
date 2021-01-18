import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getFollowedArtists, getUserInfo } from "../spotify/apis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

const StyledNav = styled.nav`
  grid-row: span 2 / auto;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding-top: 30px;
  height: 100%;
`;

const UserContainer = styled.div`
  & img {
    height: 100px;
    border-radius: 100%;
    margin: 15px 0;
  }
`;

const StyledUl = styled.ul`
  text-align: left;
  list-style: none;
`;

const Nav = () => {
  // api call for user info
  const [userInfo, setUserInfo] = useState({});

  const getData = async () => {
    const { displayName, imageUrl } = await getUserInfo();

    setUserInfo({ displayName, imageUrl });
  };

  useEffect(() => {
    getData();
  }, []);

  const { displayName, imageUrl } = userInfo;

  return (
    <StyledNav>
      <UserContainer>
        <p>{displayName}</p>
        <img src={imageUrl} alt={displayName} />
        {/*<span>*/}
        {/*  <FontAwesomeIcon icon={faUserAlt} />*/}
        {/*</span>*/}
      </UserContainer>
      <StyledUl>
        <li>Profile</li>
        <li>Audio Analysis</li>
        <li>
          {/* <Link to="/profile/playlists">Playlists</Link> */}
          {/* <Link to="/profile/topTracks">Top Tracks</Link> */}
          Playlists
        </li>
        <li>Top Tracks</li>
        <li>Top Artists</li>
        <li>Top Genres</li>
      </StyledUl>
    </StyledNav>
  );
};

export default Nav;
