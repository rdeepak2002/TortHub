import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container, Navbar, Nav } from 'react-bootstrap';

import Stream from './components/stream.component';
import DeviceControl from './components/device-control.component';
import Stats from './components/stats.component';
import Settings from './components/settings.component';
import About from './components/about.component';

const TITLE = 'Tort Hub'

export default class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>

        <Router>
          <Navbar sticky='top' bg='dark' variant='dark' expand='lg'>
            <Container>
              <Navbar.Brand href='/stream'>TortHub</Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                  <NavLink to={'/stream'} className='nav-link' activeClassName='active'>Stream</NavLink>
                  <NavLink to={'/stats'} className='nav-link' activeClassName='active'>Temperature and Humidity</NavLink>
                  <NavLink to={'/lights'} className='nav-link' activeClassName='active'>Lights</NavLink>
                  <NavLink to={'/settings'} className='nav-link' activeClassName='active'>Settings</NavLink>
                  <NavLink to={'/about'} className='nav-link' activeClassName='active'>About</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Switch>
            <Route path='/stream'>
              <Stream/>
            </Route>
            <Route exact path='/lights'>
              <DeviceControl/>
            </Route>
            <Route exact path='/stats'>
              <Stats/>
            </Route>
            <Route exact path='/settings'>
              <Settings/>
            </Route>
            <Route exact path='/about'>
              <About/>
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
