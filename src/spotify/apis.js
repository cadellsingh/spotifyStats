import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

// extract access token
const params = JSON.parse(localStorage.getItem("params"));
spotifyApi.setAccessToken(params.access_token);

// APIS CALLS
export const getTopArtists = async () => {
  return await spotifyApi.getMyTopArtists({ limit: 50 });
};

// returns display name and image url
export const getUserInfo = async () => {
  const data = await spotifyApi.getMe();
  const { display_name: displayName, images } = data;
  const { url: imageUrl } = images[0];
  return { displayName, imageUrl };
};

export const getFollowedArtists = async () => {
  return await spotifyApi.getFollowedArtists();
};

export const getMyTopArtists = async (limit) => {
  const data = await spotifyApi.getMyTopArtists({ limit: limit });
  const { items } = data;
  return items;
};

export const getMyTopTracks = async (limit) => {
  return await spotifyApi.getMyTopTracks({ limit: limit });
};
