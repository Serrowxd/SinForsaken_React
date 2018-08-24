import React, { Component } from 'react';
import { Container, Row, Column } from './styles/theme';

import './styles/css/styles.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Row justify="space-around">
          <Column>
            <h1 className="bigsin"> SinForsaken </h1>
          </Column>
          <Column>
            <p> Henlo (OvO") </p>
            <Row justify-content="space-evenly">
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
