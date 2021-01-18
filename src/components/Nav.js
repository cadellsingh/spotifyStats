import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getFollowedArtists, getUserInfo } from "../spotify/apis";

const StyledNav = styled.nav`
  border: 2px solid red;
`;

const Nav = () => {
  // api call for user info
  const [userInfo, setUserInfo] = useState([]);

  const getData = async () => {
    // let data = await getUserInfo();
    let { artists } = await getFollowedArtists();
    setUserInfo(artists);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(userInfo);

  return (
    <StyledNav>
      <div>img and some basic user info</div>
      <ul>
        <li>
          <Link to="/profile/playlists">Playlists</Link>
          {/* <Link to="/profile/topTracks">Top Tracks</Link> */}
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
