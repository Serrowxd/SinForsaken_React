import React, { Component } from 'react';
import { Container, Row, Column, Jumbo } from './styles/theme';

import img from './assets/banner.jpg';
import img2 from './assets/sincrop.png';

import './styles/css/styles.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Row justify="space-around" height="20rem">
          <Column justify="center">
            <h1 className="bigsin"> SinForsaken </h1>
          </Column>
          <Column width="40%" topmargin>
            <img src={img} class="img" />
            <Row justify="space-evenly" topmargin navstyle>
              <p> Henlo (OvO") </p>
              <p> Henlo (OvO") </p>
              <p> Henlo (OvO") </p>
              <p> Henlo (OvO") </p>
            </Row>
          </Column>
        </Row>

        <Row justify="center">
          <Jumbo>
            <img src={img2} class="img" />
          </Jumbo>
        </Row>
      </Container>
    );
  }
}

export default App;
