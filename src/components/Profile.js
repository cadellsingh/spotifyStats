import { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { getTopArtists } from "../spotify/apis";
import Playlists from "./Playlists";
import styled from "styled-components";
import Nav from "./Nav";

const Layout = styled.div`
  background-color: green;
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
    <div>
      <Nav />
      <div>
        <Switch>
          <Route path="/profile/" component={Playlists} />
        </Switch>
      </div>
    </div>
  );
};

export default Profile;
