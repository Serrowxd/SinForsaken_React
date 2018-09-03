import React, { Component, Fragment } from 'react';
import { LandingContainer, Row, Column, Jumbo, Body } from './styles/theme';
import { Navigation, Footer } from './reducer';

import img from './assets/sincakenb.png';
import serrow from './assets/fatcat.png';
import serrow2 from './assets/serrowattak.png';

import './styles/css/styles.css';

class Landing extends Component {
  ohMy() {
    alert("Oh Senpai, w-we shouldn't ;w;");
  }
  render() {
    return (
      <Fragment>
        <Navigation />
        <LandingContainer>
          <Jumbo className="sinbkg">
            <Row width="85%">
              <Column>
                <h1 className="bigsin">SinForsaken</h1>
                <p className="smolsin">Area-52</p>
              </Column>
              <Column>
                <img src={img} alt="sincake" class="img" />
              </Column>
            </Row>
          </Jumbo>
        </LandingContainer>
        <Body justify="center" light>
          <Row padded>
            <Column whois>
              <h1> Who are we? </h1>
              <p>
                <strong>SinForsaken</strong> of Area 52 is Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Column>
            <Column whois>
              <img src={serrow} alt="Serrow ATTAK" class="img" />
            </Column>
          </Row>
        </Body>
        <Body justify="center">
          <Row padded>
            <Column whois>
              <img src={serrow2} alt="Serrow Meow" class="img2" />
            </Column>
            <Column whois>
              <h1>Area52 - Horde</h1>
              <p>
                <strong>SinForsaken</strong> of Area 52 is Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Column>
          </Row>
        </Body>
        <Body justify="center" light>
          <Row padded>
            <Column joinup>
              <h1> QwQ </h1>
              <input type="text" name="text" placeholder="Sign Up XwX" />
              <input type="text" name="text" placeholder="Sign Up OwO" />
              <input type="text" name="text" placeholder="Sign Up @w@" />
              <input type="text" name="text" placeholder="Sign Up YwY" />
              <button onClick={this.ohMy}> C-Click me Senpai UwU </button>
            </Column>
          </Row>
        </Body>
        <Body justify="center" foot>
          <Footer />
        </Body>
      </Fragment>
    );
  }
}

export default Landing;

// #212121 - Background
// #303030 - Foreground