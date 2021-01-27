export const setTokenInStorage = (token) => {
  return localStorage.setItem("params", JSON.stringify(token));
};

export const getAccessTokenFromStorage = () => {
  return JSON.parse(localStorage.getItem("params"));
};

export const setTokenTimestamp = () => {
  const tokenTimestamp = Date.now();
  localStorage.setItem("tokenTimestamp", tokenTimestamp);
};

export const getTokenTimestamp = () => {
  return localStorage.getItem("tokenTimestamp");
};

export const setExpiryTime = (time) => {
  localStorage.setItem("expiry_time", time * 1000);
};

export const getExpiryTime = () => {
  return localStorage.getItem("expiry_time");
};

export const removeToken = () => {
  window.localStorage.removeItem("params");
};

export const tokenExpired = () => {
  if (Date.now() - getTokenTimestamp() > getExpiryTime()) {
    removeToken();
    window.location.reload();
  }
};
