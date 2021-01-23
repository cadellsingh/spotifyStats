import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import NotFound from "../components/NotFound";
import Profile from "../components/Profile";
import Redirect from "../components/Redirect";
import { token } from "../spotify/apis";
// import { token } from "../spotify/apis";
import { getAccessToken, getParamValues } from "../utils/functions";

const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function (initial, item) {
    if (item) {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

window.location.hash = "";

const AppRouter = () => {
  const [accessToken, setToken] = useState("");

  useEffect(() => {
    let access_token = hash.access_token;
    if (access_token) {
      localStorage.setItem("params", JSON.stringify(access_token));
      setToken(access_token);
    }
  }, []);

  console.log(accessToken);

  return (
    // <BrowserRouter>
    //   <div>
    //     <Switch>
    //       <Route path="/" component={Login} exact={true} />
    //       <Route path="/redirect" component={Redirect} />
    //       <Route path="/profile" component={Profile} />
    //       <Route component={NotFound} />
    //     </Switch>
    //   </div>
    // </BrowserRouter>

    <div>{accessToken ? <Profile /> : <Login />}</div>

    // <BrowserRouter>
    //   <div>{accessToken ? <Profile /> : <Login />}</div>
    //   <Route path="/redirect" component={Redirect} />
    // </BrowserRouter>
  );
};

export default AppRouter;
