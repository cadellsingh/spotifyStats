import { useEffect } from "react";
import _ from "lodash";
import { getParamValues } from "../utils/functions";
import { useHistory } from "react-router-dom";
import {
  setExpiryTime,
  setTokenInStorage,
  setTokenTimestamp,
} from "../spotify/tokens";

const Redirect = () => {
  const history = useHistory();

  useEffect(() => {
    const { location } = window;

    try {
      if (_.isEmpty(location.hash)) {
        return history.push("/");
      }

      const access_token = getParamValues(location.hash);
      // setAccessToken(access_token);
      setTokenInStorage(access_token);
      setTokenTimestamp();
      setExpiryTime(access_token.expires_in);

      // const expiryTime = access_token.expires_in * 1000;

      // localStorage.setItem("tokenTimestamp", tokenTimestamp);
      // localStorage.setItem("params", JSON.stringify(access_token));
      // localStorage.setItem("expiry_time", expiryTime);

      history.push("/");
    } catch (error) {
      history.push("/");
    }
  });

  return null;
};

export default Redirect;
