import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Navbar, Nav } from 'react-bootstrap';

import Stream from './components/stream.component';
import Stats from './components/stats.component';

const TITLE = 'Tort Hub'

export default class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>

        <Router>
          <Navbar sticky='top' bg='light' expand='lg'>
            <Navbar.Brand href='/stream'>TortHub</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='mr-auto'>
                <NavLink to={'/stream'} className='nav-link' activeClassName='active'>Stream</NavLink>
                <NavLink to={'/stats'} className='nav-link' activeClassName='active'>Stats</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <Route exact path='/stream'>
              <Stream/>
            </Route>
            <Route exact path='/stats'>
              <Stats/>
            </Route>
            <Route path='*'>
              <Redirect to='/stream'/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
