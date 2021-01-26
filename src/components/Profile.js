import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import AllPlaylists from "./Playlists/AllPlaylists";
import styled from "styled-components";
import Nav from "./Nav/Nav";
import AllTopArtists from "./Artists/AllTopArtists";
import MainContent from "./MainContent";
import AllTopTracks from "./Tracks/AllTopTracks";
import AllRecentlyPlayed from "./RecentlyPlayed/AllRecentlyPlayed";
import Playlist from "./Playlists/Playlist";
import Track from "./Tracks/Track";
import Artist from "./Artists/Artist";
import AudioAnalysis from "./AudioAnalysis";
import NotFound from "./NotFound";
import Logout from "./Logout";
import { handleLogout } from "../utils/functions";

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
  useEffect(() => {
    const expiry = localStorage.getItem("expiry_time");
    const timer = setTimeout(() => handleLogout(), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <Nav />
      <Switch>
        <Route exact path="/" component={MainContent} />

        {/* <Route path="/audioAnalysis" component={AudioAnalysis} /> */}

        <Route path="/playlists" component={AllPlaylists} />
        <Route path="/playlist/:playlistId" component={Playlist} />

        <Route path="/artists" component={AllTopArtists} />
        <Route path="/artist/:artistId" component={Artist} />

        <Route path="/tracks" component={AllTopTracks} />
        <Route path="/track/:trackId" component={Track} />

        {/* <Route path="/topGenres" component={TopGenres} /> */}

        <Route path="/recentlyPlayed" component={AllRecentlyPlayed} />

        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default Profile;
