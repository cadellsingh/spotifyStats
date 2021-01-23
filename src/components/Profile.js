import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, useRouteMatch } from "react-router-dom";
import { getAccessToken, getTopArtists, token } from "../spotify/apis";
import AllPlaylists from "./Playlists/AllPlaylists";
import styled from "styled-components";
import Nav from "./Nav/Nav";
import { GlobalStyles } from "../styles/globalStyling";
import AllTopArtists from "./Artists/AllTopArtists";
import MainContent from "./MainContent";
import AllTopTracks from "./Tracks/AllTopTracks";
import AllRecentlyPlayed from "./RecentlyPlayed/AllRecentlyPlayed";
import Aos from "aos";

import SpotifyWebApi from "spotify-web-api-js";
import AppRouter from "../router/AppRouter";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  grid-column-gap: 10px;
  padding: 20px 0;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
`;

const Profile = () => {
  // const { url, path } = useRouteMatch();
  const [accessToken, setAccessToken] = useState([]);

  // const getToken = token;

  // const getData = async () => {
  //   let data = await getAccessToken();
  //   setAccessToken(data);
  // };

  // set access token in useEffect
  // if it returns null then redirect to home

  // useEffect(() => {
  //   Aos.init();
  //   setAccessToken(token);
  //   getData();
  // }, []);

  if (accessToken === null) {
    console.log("no token");
  }

  // console.log(getToken);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Nav>
            <Switch>
              <Route path="/" component={MainContent} />
            </Switch>
          </Nav>
        </Layout>
      </BrowserRouter>

      {/* <Layout>
        <Nav />
        <Switch>
          <Route exact path={path} component={MainContent} />
          <Route path={`${path}/playlists`} component={AllPlaylists} />
          <Route path={`${path}/topArtists`} component={AllTopArtists} />
          <Route path={`${path}/topTracks`} component={AllTopTracks} />
          <Route path={`${path}/allPlaylists`} component={AllPlaylists} />
          <Route
            path={`${path}/recentlyPlayed`}
            component={AllRecentlyPlayed}
          />
        </Switch>
      </Layout> */}
    </>
  );
};

export default Profile;
