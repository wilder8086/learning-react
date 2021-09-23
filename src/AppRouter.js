import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/router/NavBar/NavBar';
import Home from './components/router/Home/Home';
import Page1 from './components/router/Page1/Page1';
import Page2 from './components/router/Page2/Page2';
import PageError from './components/router/PageError/PageError';
import './AppRouter.css';

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Redirect
            from="/"
            to="/home" />
          <Switch>
            <Route
              path="/home"
              component={Home} />
            <Route
              exact
              path="/page1"
              render={() => <Page1 name="React Buenos Aires" />} />
            <Route
              exact
              path="/page2"
              render={() => <Page2 />} />
            <Route component={PageError} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;