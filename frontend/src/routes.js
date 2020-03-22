import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';

function isAuthenticated() {
  const username = sessionStorage.getItem('username');
  const name = sessionStorage.getItem('name');
  return username && name;
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/login"
          exact
          render={props =>
            isAuthenticated() ? <Redirect to="/" /> : <Login {...props} />
          }
        />
        <PrivateRoute path="/" exact component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
