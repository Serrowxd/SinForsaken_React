import React, { Fragment } from 'react';
import { Body } from '../styles/theme';
import { Navigation } from '../reducer';

const OwO = () => {
  return (
    <Fragment>
      <Navigation />
      <Body worky>
        <h1> This page is under maintenance! </h1>
      </Body>
    </Fragment>
  );
};

export default OwO;
