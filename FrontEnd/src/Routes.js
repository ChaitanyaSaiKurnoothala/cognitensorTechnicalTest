import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login-component";
import Forgot from "./components/forgot-password";
import Successpage from "./components/success-page";

const Routes = () => {
  return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/forgot">
              <Forgot />
            </Route>
            <Route path="/success">
                <Successpage/>
            </Route>
          </Switch>
        </Router>
      </div>
  );
};

export default Routes;