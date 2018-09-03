import React from 'react';
import { RaiderContainer, UnstyledColumn } from '../styles/theme';

const RaiderSmol = props => {
  return (
    <RaiderContainer raidermini color={props.color}>
      <UnstyledColumn>
        <h2> {props.name} </h2>
        <h4> {props.class} </h4>
      </UnstyledColumn>
      <img src={props.img} alt="raider" class="img" />
    </RaiderContainer>
  );
};

export default RaiderSmol;
