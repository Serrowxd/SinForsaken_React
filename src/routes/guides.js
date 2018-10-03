import React, { Fragment } from 'react';
import { Body, PaddingContainer } from '../styles/theme';
import { Navigation } from '../reducer';

const Guides = () => {
  return (
    <Fragment>
      <Navigation />
      <Body worky>
        <h1> This page is under maintenance! </h1>
      </Body>
    </Fragment>
  );
};

export default Guides;
