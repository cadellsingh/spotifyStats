import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { get } from "../utils/apis";

const Profile = () => {
  const [data, setData] = useState([]);
  const spotifyApi = new SpotifyWebApi();

  const params = JSON.parse(localStorage.getItem("params"));

  spotifyApi.setAccessToken(params.access_token);

  useEffect(() => {
    spotifyApi
      .getMyTopArtists() // note that we don't pass a user id
      .then(
        function (data) {
          console.log("User playlists", data);
        },
        function (err) {
          console.error(err);
        }
      );
  }, []);

  return (
    <div>
      <p>profile</p>
    </div>
  );
};

export default Profile;
