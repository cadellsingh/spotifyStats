import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav/Nav";
import UserTopArtists from "./Artists/UserTopArtists";
import MainContent from "./MainContent";
import UserTopTracks from "./Tracks/UserTopTracks";
import AllRecentlyPlayed from "./RecentlyPlayed/AllRecentlyPlayed";
import Playlist from "./Playlists/Playlist";
import Track from "./Tracks/Track";
import Artist from "./Artists/Artist";
import NotFound from "./NotFound";
import { handleLogout } from "../utils/functions";
import { getExpiryTime, tokenExpired } from "../spotify/tokens";
import UserPlaylists from "./Playlists/UserPlaylists";
import Categories from "./SpotifyPlaylists/Categories";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 230px 1fr;
  grid-column-gap: 10px;
  padding: 20px 0;

  @media (max-width: 800px) {
    grid-template-columns: 200px 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
`;

const Profile = () => {
  useEffect(() => {
    tokenExpired();

    const expiry = getExpiryTime();
    const timer = setTimeout(() => handleLogout(), expiry);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <Nav />
      <div>
        <Switch>
          <Route exact path="/" component={MainContent} />

          <Route path="/spotifyPlaylists" component={Categories} />

          <Route path="/playlists" component={UserPlaylists} />
          <Route path="/playlist/:playlistId" component={Playlist} />

          <Route path="/artists" component={UserTopArtists} />
          <Route path="/artist/:artistId" component={Artist} />

          <Route path="/tracks" component={UserTopTracks} />
          <Route path="/track/:trackId" component={Track} />

          <Route path="/recentlyPlayed" component={AllRecentlyPlayed} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </Layout>
  );
};

export default Profile;
