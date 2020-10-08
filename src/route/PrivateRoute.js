import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

const PrivateRoute = ({ user,component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => (
      user && user.isAdmin
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
    }

export default PrivateRoute;
