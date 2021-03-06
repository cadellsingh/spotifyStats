import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

export const setSpotifyToken = (token) => {
  spotifyApi.setAccessToken(token);
};

// APIS CALLS
export const getTopArtists = async () => {
  return await spotifyApi.getMyTopArtists({ limit: 50 });
};

export const getUserInfo = async () => {
  const data = await spotifyApi.getMe();
  const { display_name: displayName } = data;
  return displayName;
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
  const { items } = data || {};
  return items;
};

export const getMyRecentlyPlayed = async (limit) => {
  const data = await spotifyApi.getMyRecentlyPlayedTracks({ limit: limit });
  const { items } = data || {};
  return items;
};

export const getUserPlaylists = async (limit = 50) => {
  const data = await spotifyApi.getUserPlaylists({ limit: limit });
  const { items } = data || {};
  return items;
};

export const getPopularPlaylists = async (type) => {
  const data = await spotifyApi.getCategoryPlaylists(type);
  const { playlists } = data;
  const { items } = playlists;
  return items;
};

export const getPlaylist = async (id) => {
  const data = await spotifyApi.getPlaylist(id);
  const { description, images, name, tracks } = data;
  const { url: imageUrl } = images[0] || {};
  const { items } = tracks;
  return { description, imageUrl, name, items };
};

export const getArtist = async (id) => {
  const data = await spotifyApi.getArtist(id);
  const { followers, genres, images, name } = data;
  const { total } = followers;
  const { url: imageUrl } = images[0] || {};
  return { total, genres, imageUrl, name };
};

export const getArtistTopTracks = async (id, code) => {
  const data = await spotifyApi.getArtistTopTracks(id, code);
  const { tracks } = data;
  return tracks;
};

export const getArtistAlbums = async (id, type, code) => {
  const data = await spotifyApi.getArtistAlbums(id, {
    include_groups: type,
    market: code,
    limit: 10,
  });
  const { items } = data;
  return items;
};

export const getArtistRelatedArtists = async (id) => {
  const data = await spotifyApi.getArtistRelatedArtists(id);
  const { artists } = data || {};
  return artists;
};

export const getTrackFromAlbum = async (id) => {
  // using album id to get track
  const data = await spotifyApi.getAlbum(id);
  const { tracks, images } = data;
  const { url } = images[0] || {};
  const { items } = tracks;
  const song = items[0] || {};
  return { song, url };
};

export const getAllCategories = async () => {
  const data = await spotifyApi.getCategories();
  const { categories } = data;
  const { items } = categories;
  return items;
};

export const getCategoryPlaylists = async (id) => {
  const data = await spotifyApi.getCategoryPlaylists(id);
  const { playlists } = data;
  const { items } = playlists;
  return items;
};

export const getNewReleases = async () => {
  const data = await spotifyApi.getNewReleases({ limit: 50 });
  const { albums } = data;
  const { items } = albums;
  return items;
};

export const getAlbum = async (id) => {
  return await spotifyApi.getAlbum(id);
};

export const getAlbumTracks = async (id) => {
  const data = await spotifyApi.getAlbumTracks(id);
  const { items } = data;
  return items;
};

export const searchItem = async (query) => {
  const data = await spotifyApi.search(query, [
    "artist",
    "track",
    "playlist",
    "album",
  ]);
  return data;
};
