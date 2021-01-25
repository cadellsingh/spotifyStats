import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Redirect from "../components/Redirect";
import Aos from "aos";
import { setAccessToken } from "../spotify/apis";
import { GlobalStyles } from "../styles/globalStyling";

const AppRouter = () => {
  const [accessToken, setToken] = useState("");

  useEffect(() => {
    Aos.init();
    const params = JSON.parse(localStorage.getItem("params"));

    if (params) {
      const { access_token } = params;
      setToken(access_token);
      setAccessToken(access_token);
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      {accessToken ? <Profile /> : <Login />}
      <Route path="/redirect" component={Redirect} />
    </>
  );
};

// prob dont need redirect component

// um you look a bit lost,  lets get you back home

export default AppRouter;
