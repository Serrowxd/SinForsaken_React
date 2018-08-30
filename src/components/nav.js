import React, { Component } from 'react';
import { NavBar, Row } from '../styles/theme';

class Navigation extends Component {
  render() {
    return (
      <NavBar>
        <Row navrow>
          <h1> S/F </h1>
        </Row>
        <Row owo>
          <a href="/">
            <h2>Home</h2>
          </a>
          <a href="/roster">
            <h2>Roster</h2>
          </a>
          <h2>Guides</h2>
          <h2>OwO</h2>
          <h2>Join the Team</h2>
        </Row>
      </NavBar>
    );
  }
}

export default Navigation;
