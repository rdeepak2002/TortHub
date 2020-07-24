import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Stream from './components/stream.component.js';

const TITLE = 'Tort Hub'

export default class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <Router>
          <Switch>
            <Route path='*'>
              <Stream/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
