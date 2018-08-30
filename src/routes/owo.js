import React, { Fragment } from 'react';
import { Body } from '../styles/theme';
import { Navigation } from '../reducer';

const OwO = () => {
  return (
    <Fragment>
      <Navigation />
      <Body>
        <h1> OwO! </h1>
      </Body>
    </Fragment>
  );
};

export default OwO;
