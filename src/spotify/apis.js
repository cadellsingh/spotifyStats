import SpotifyWebApi from "spotify-web-api-js";
import { getParamValues } from "../utils/functions";

const spotifyApi = new SpotifyWebApi();

// export const setToken = () => {
//   localStorage.setItem("params", JSON.stringify(access_token));
// };

// extract access token
const getToken = () => {
  const token = JSON.parse(localStorage.getItem("params"));

  if (token) {
    spotifyApi.setAccessToken(token);
  }

  return token;
};

export const token = getToken();

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

export const getMyTopArtists = async (limit, timeRange = "long_term") => {
  const data = await spotifyApi.getMyTopArtists({
    limit: limit,
    time_range: timeRange,
  });
  const { items } = data;
  return items;
};

export const getMyTopTracks = async (limit, timeRange = "long_term") => {
  const data = await spotifyApi.getMyTopTracks({
    limit: limit,
    time_range: timeRange,
  });
  const { items } = data;
  return items;
};

export const getUserPlaylists = async (limit = 50) => {
  const data = await spotifyApi.getUserPlaylists({ limit: limit });
  const { items } = data;
  return items;
};

export const getMyRecentlyPlayed = async (limit) => {
  const data = await spotifyApi.getMyRecentlyPlayedTracks({ limit: limit });
  const { items } = data;
  return items;
};

export const getPopularPlaylists = async (type) => {
  const data = await spotifyApi.getCategoryPlaylists(type);
  const { playlists } = data;
  const { items } = playlists;
  return items;
};

export const getTrack = async (trackId) => {
  return await spotifyApi.getTrack(trackId);
};
