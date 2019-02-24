import React, { Component } from 'react';
import * as bs from 'react-bootstrap';

import logo from '../resources/wordmark-path.svg';

export default class Navbar extends Component {
  render() {
    return (
      <bs.Navbar bg="light" expand="lg" fixed="top">
        <bs.Container>
          <bs.Navbar.Brand href="/" className="notochord-logo-link">
            <img src={logo} alt="Notochord logo" height="40"/>
          </bs.Navbar.Brand>
          <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <bs.Navbar.Collapse id="basic-navbar-nav">
            <div className="mr-auto"></div>
            <bs.Nav>
              <bs.Nav.Link href="/about">About Notochord</bs.Nav.Link>
              <bs.Nav.Link href="/library">My Library</bs.Nav.Link>
              <bs.Nav.Link href="/editor">New Song</bs.Nav.Link>
            </bs.Nav>
          </bs.Navbar.Collapse>
        </bs.Container>
      </bs.Navbar>
    );
  }
}