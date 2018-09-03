import React, { Component } from 'react';
import { NavBar, Row } from '../styles/theme';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false,
      isTop: true,
    };
    this.navScroll = this.navScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY >= 100;
      if (isTop !== this.state.isTop) {
        this.navScroll();
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navScroll);
  }

  navScroll() {
    this.setState({ scrolled: true });
  }

  // OnScroll is broken, will have to debug later.

  render() {
    // const scrolled = this.state.scrolled;
    return (
      // <NavBar
      //   onScroll={() => this.setState({ scrolled: true })}
      //   height={scrolled ? '' : '5rem'}
      //   position={scrolled ? '' : 'fixed'}
      //   background={scrolled ? '' : '#212121'}
      // >
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
          <a href="/guides">
            <h2>Guides</h2>
          </a>
          <a href="/owo">
            <h2>OwO</h2>
          </a>
          <a href="/join">
            <h2>Join the Team</h2>
          </a>
        </Row>
      </NavBar>
    );
  }
}

export default Navigation;
