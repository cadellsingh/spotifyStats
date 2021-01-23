import { useEffect } from "react";
import _ from "lodash";
// import { getParamValues } from "../utils/functions";
import { useHistory } from "react-router-dom";
// import { setToken } from "../spotify/apis";

const Redirect = () => {
  const history = useHistory();

  useEffect(() => {
    const { location } = window;

    // setToken();
    history.push("/");

    // try {
    //   if (_.isEmpty(location.hash)) {
    //     return history.push("/");
    //   }

    //   const access_token = getParamValues(location.hash);
    //   const expiryTime = new Date().getTime + access_token.expires_in * 1000;

    //   localStorage.setItem("params", JSON.stringify(access_token));
    //   localStorage.setItem("expiry_time", expiryTime);

    //   history.push("/");
    // } catch (error) {
    //   history.push("/");
    // }
  });

  return null;
};

export default Redirect;
