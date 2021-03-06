import { removeToken } from "../spotify/tokens";

export const getParamValues = (url) => {
  return url
    .slice(1)
    .split("&")
    .reduce((prev, curr) => {
      const [title, value] = curr.split("=");
      prev[title] = value;
      return prev;
    }, {});
};

export const millisToMinutesAndSeconds = (millis) => {
  let minutes = Math.floor(millis / 60000);
  let seconds = ((millis % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export const handleLogout = () => {
  console.log("logging out");
  removeToken();
  window.location.reload();
};

export const formatNumber = (str) => {
  return String(str).replace(/(.)(?=(\d{3})+$)/g, "$1,");
};
