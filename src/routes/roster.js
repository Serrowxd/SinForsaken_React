import React, { Fragment } from 'react';
import { Body } from '../styles/theme';
import { Navigation } from '../reducer';

const Roster = () => {
  return (
    <Fragment>
      <Navigation />
      <Body>
        <h1> Roster! </h1>
      </Body>
    </Fragment>
  );
};

export default Roster;
