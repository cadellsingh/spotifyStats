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
  console.log("redirect");

  useEffect(() => {
    const { location } = window;

    try {
      if (_.isEmpty(location.hash)) {
        return history.push("/");
      }

      const access_token = getParamValues(location.hash);
      setTokenInStorage(access_token);
      setTokenTimestamp();
      setExpiryTime(access_token.expires_in);

      history.push("/");
    } catch (error) {
      history.push("/");
    }
  });

  return null;
};

export default Redirect;
