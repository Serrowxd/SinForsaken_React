import React, { Fragment } from 'react';
import { Body, PaddingContainer } from '../styles/theme';
import { Navigation } from '../reducer';

const Guides = () => {
  return (
    <Fragment>
      <Navigation />
      <PaddingContainer>
        <Body>
          <h1> Guides! </h1>
        </Body>
      </PaddingContainer>
    </Fragment>
  );
};

export default Guides;
