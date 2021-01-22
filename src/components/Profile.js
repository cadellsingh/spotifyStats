import { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { getTopArtists } from "../spotify/apis";
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
  const { url, path } = useRouteMatch();
  const [userProfile, setUserProfile] = useState([]);

  const params = JSON.parse(localStorage.getItem("params"));
  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(params.access_token);

  // const getTopArtists = async () => {
  //   return await spotifyApi.getMyTopArtists({ limit: 50 });
  // };

  // const getData = async () => {
  //   let data = await getTopArtists();
  //   setUserProfile(data);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  console.log(`userProfile: ${userProfile}`);

  return (
    <>
      <GlobalStyles />

      <Layout>
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
      </Layout>
    </>
  );
};

export default Profile;
