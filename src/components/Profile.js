import { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { getTopArtists } from "../spotify/apis";
import AllPlaylists from "./Playlists/AllPlaylists";
import styled from "styled-components";
import Nav from "./Nav";
import { GlobalStyles } from "../styles/globalStyling";
import TopArtists from "./Artists.js/TopArtists";
import Playlists from "./Playlists/Playlists";
import TopTracks from "./Tracks/TopTracks";
import { MainBackgroundColor } from "../styles/sharedStyles";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  grid-column-gap: 10px;
  margin-top: 20px;
`;

const SecondLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
`;

const Profile = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    let test = await getTopArtists();
    setData(test);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <GlobalStyles />

      <Layout>
        <Nav />
        <SecondLayout>
          <TopArtists />
          <Playlists />
          <TopTracks />
        </SecondLayout>
      </Layout>

      {/* <Layout>
        <Nav />
        <TopArtists />
        <Playlists />
        <TopTracks />
      </Layout> */}

      {/* could prob move this to nav component */}
      <div>
        <Switch>
          <Route path="/profile/playlists" component={AllPlaylists} />
        </Switch>
      </div>
    </>
  );
};

export default Profile;
