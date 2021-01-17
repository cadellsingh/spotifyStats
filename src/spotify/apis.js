import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

// extract access token
const params = JSON.parse(localStorage.getItem("params"));
spotifyApi.setAccessToken(params.access_token);

// APIS CALLS
export const getTopArtists = async () => {
  return await spotifyApi.getMyTopArtists({ limit: 50 });
};
