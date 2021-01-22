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

export const camelCaseString = (str) => {
  let string = str.split(" ").map((word, index) => {
    if (index !== 0) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return word.charAt(0).toLowerCase() + word.slice(1);
  });

  return string.join("");
};
