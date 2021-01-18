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

const Layout = styled.div`
  /* border: 2px solid red; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  height: 100vh;
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
        <TopArtists />
        <Playlists />
        <TopTracks />
      </Layout>

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
