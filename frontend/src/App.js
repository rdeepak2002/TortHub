import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Stream from "./components/stream.component.js"

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='*'>
            <Stream/>
          </Route>
        </Switch>
      </Router>
    );
  }
}
