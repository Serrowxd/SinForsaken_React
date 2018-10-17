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
                <strong>SinForsaken</strong> is a semi-hardcore raiding guild on
                the server US-Area 52, Horde Side. We are a close-knit community
                focused on progression, team-building, and playing
                competitively. We have been competitive raiders for upwards of
                eight years, competing with server top 3 and attending three
                Blizzcons together. We raid Tuesday and Wednesday 7:30pm to
                11:00pm EST. SinForsaken enjoys playing other games together as
                well, including HoTS, FFXIV, LoL, Hearthstone, and OW. While
                less competitive, we have and maintain a raid static in FFXIV on
                the server Mateus.
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
                What can you expect? We’re a casual bunch of gamers who enjoy
                dank memes, a laidback raid environment, and talking about
                end-game content. Elitist attitudes need not apply. We have
                multiple competitive Mythic+ groups that run throughout the
                week, pvp and arena gurus, and PvP island expedition teams. If
                you’re a more casual player, we have a place for you too!
              </p>
            </Column>
          </Row>
        </Body>
        {/* <Body justify="center" light>
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
        </Body> */}
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
