import React, { Component } from 'react';
import { Container, Row, Column, Jumbo } from './styles/theme';
import { Navigation } from './reducer';

import img from './assets/sincakenb.png';

import './styles/css/styles.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Navigation />
        <Jumbo className="sinbkg">
          <Row>
            <Column>
              <h1 className="bigsin">SinForsaken</h1>
              <p className="smolsin">Area-52</p>
            </Column>
            <Column>
              <img src={img} alt="sincake" class="img" />
            </Column>
          </Row>
        </Jumbo>
      </Container>
    );
  }
}

export default App;

// #212121 - Background
// #303030 - Foreground
