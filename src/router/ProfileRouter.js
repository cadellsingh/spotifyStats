import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import NotFound from "../components/NotFound";
import Profile from "../components/Profile";
import Redirect from "../components/Redirect";

const ProfileRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Login} exact={true} />
          <Route path="/redirect" component={Redirect} />
          <Route path="/profile" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default ProfileRouter;
