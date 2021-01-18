const {
  REACT_APP_CLIENT_ID,
  REACT_APP_REDIRECT_URL,
  REACT_APP_AUTH_URL,
} = process.env;

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "playlist-read-collaborative",
  "user-library-read",
  "user-follow-read",
];

export const loginUrl = `${REACT_APP_AUTH_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
