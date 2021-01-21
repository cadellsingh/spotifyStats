import { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { getTopArtists } from "../spotify/apis";
import AllPlaylists from "./Playlists/AllPlaylists";
import styled from "styled-components";
import Nav from "./Nav/Nav";
import { GlobalStyles } from "../styles/globalStyling";
import TopArtists from "./Artists/TopArtists";
import Playlists from "./Playlists/Playlists";
import TopTracks from "./Tracks/TopTracks";
import RecentlyPlayedTracks from "./RecentlyPlayed/RecentlyPlayedTracks";
import AllTopArtists from "./Artists/AllTopArtists";

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

const SecondLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Profile = () => {
  const [userProfile, setUserProfile] = useState([]);

  const getData = async () => {
    let data = await getTopArtists();
    setUserProfile(data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(userProfile);

  return (
    <>
      <GlobalStyles />

      <Layout>
        <Nav />
        <Switch>
          <Route path="/profile/playlists/" component={AllPlaylists} />
          <Route path="/profile/topArtists/" component={AllTopArtists} />
          <SecondLayout>
            <TopArtists />
            <Playlists />
            <TopTracks />
            <RecentlyPlayedTracks />
          </SecondLayout>
        </Switch>
      </Layout>
    </>
  );
};

export default Profile;
