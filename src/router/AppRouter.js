import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "../components/Login";
import NotFound from "../components/NotFound";
import Profile from "../components/Profile";
import Redirect from "../components/Redirect";
import { setAccessToken } from "../spotify/apis";

const AppRouter = () => {
  const [accessToken, setToken] = useState("");

  useEffect(() => {
    const params = JSON.parse(localStorage.getItem("params"));

    if (params) {
      const { access_token } = params;
      setToken(access_token);
      setAccessToken(access_token);
    }
  }, []);

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

    // <div>{accessToken ? <Profile /> : <Login />}</div>

    <BrowserRouter>
      {accessToken ? <Profile /> : <Login />}
      <Route path="/redirect" component={Redirect} />
    </BrowserRouter>
  );
};

// prob dont need redirect component

export default AppRouter;
