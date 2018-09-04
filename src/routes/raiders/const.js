import React, { Fragment } from 'react';
import { Navigation, Footer } from '../../reducer';
import { PaddingContainer, Column, Row } from '../../styles/theme';

const RaiderConst = props => {
  return (
    <Fragment>
      <Navigation />
      <PaddingContainer raiderprof>
        <Row>
          <Column raiderprofile>
            <img src={props.img} alt="serrow" class="img" />
          </Column>

          <Column raiderprofile color={props.color}>
            <h1> {props.name} </h1>
            <h4>
              <a
                href={props.raiderio}
                target="_blank"
                rel="noopener noreferrer"
              >
                Raider.io
              </a>
            </h4>
            <h4>
              <a href={props.logs} target="_blank" rel="noopener noreferrer">
                Warcraft Logs
              </a>
            </h4>
            <h4>
              <a href={props.armory} target="_blank" rel="noopener noreferrer">
                Armory
              </a>
            </h4>
          </Column>
        </Row>
      </PaddingContainer>
      <Footer />
    </Fragment>
  );
};

export default RaiderConst;
