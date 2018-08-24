import React, { Component } from 'react';
import { Container, Row, Column } from './styles/theme';

import img from './assets/banner.jpg';

import './styles/css/styles.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Row justify="space-around">
          <Column>
            <h1 className="bigsin"> SinForsaken </h1>
          </Column>
          <Column width="50%" justify="center" topmargin>
            <img src={img} class="img" />
            <Row justify="space-evenly" topmargin navstyle>
              <p> Henlo (OvO") </p>
              <p> Henlo (OvO") </p>
              <p> Henlo (OvO") </p>
              <p> Henlo (OvO") </p>
              <p> Henlo (OvO") </p>
            </Row>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default App;
