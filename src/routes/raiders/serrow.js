import React from 'react';
import RaiderConst from './const';

import img from '../../assets/serrow.jpg';

const Serrow = props => {
  return (
    <RaiderConst
      img={img}
      name="Serrow"
      raiderio="https://raider.io/characters/us/emerald-dream/Serrow"
      logs="https://www.warcraftlogs.com/character/us/emerald-dream/serrow"
      armory="https://worldofwarcraft.com/en-us/character/emerald-dream/Serrow"
      color="orange"
    />
  );
};

export default Serrow;
