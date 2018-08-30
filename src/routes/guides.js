import React, { Fragment } from 'react';
import { Body } from '../styles/theme';
import { Navigation } from '../reducer';

const Guides = () => {
  return (
    <Fragment>
      <Navigation />
      <Body>
        <h1> Guides! </h1>
      </Body>
    </Fragment>
  );
};

export default Guides;
