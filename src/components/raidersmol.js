import React from 'react';
import { RaiderContainer } from '../styles/theme';

const RaiderSmol = props => {
  return (
    <RaiderContainer raidermini>
      <h2> {props.name} </h2>
      <h4> {props.class} </h4>
      <img src={props.img} alt="raider" class="img" />
    </RaiderContainer>
  );
};

export default RaiderSmol;
