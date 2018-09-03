import React, { Fragment } from 'react';
import { Body, PaddingContainer, Row, RaiderContainer } from '../styles/theme';
import { Navigation, Footer, RaiderSmol } from '../reducer';

import img from '../assets/serrowattak.png';

const Roster = () => {
  return (
    <Fragment>
      <Navigation />
      <PaddingContainer raider>
        <h1> Tanks </h1>
        <Row width="100%" raidrow>
          <RaiderSmol img={img} name="Serrow" class="Feral Druid" />
          <RaiderSmol img={img} name="Serrow" class="Feral Druid" />
        </Row>
        <h1> Healers </h1>
        <Row width="100%" raidrow>
          <RaiderSmol img={img} name="Serrow" class="Feral Druid" />
          <RaiderSmol img={img} name="Serrow" class="Feral Druid" />
          <RaiderSmol img={img} name="Serrow" class="Feral Druid" />
          <RaiderSmol img={img} name="Serrow" class="Feral Druid" />
        </Row>
        <h1> DPS </h1>
        <Row width="100%" raidrow wrap="wrap">
          <RaiderSmol img={img} name="Serrow" class="Feral Druid" />
          <RaiderSmol img={img} name="Serrow" class="Feral Druid" />
          <RaiderSmol img={img} name="Serrow" class="Feral Druid" />
          <RaiderSmol img={img} name="Serrow" class="Feral Druid" />
          <RaiderSmol img={img} name="Serrow" class="Feral Druid" />
          <RaiderSmol img={img} name="Serrow" class="Feral Druid" />
          <RaiderSmol img={img} name="Serrow" class="Feral Druid" />
          <RaiderSmol img={img} name="Serrow" class="Feral Druid" />
          <RaiderSmol img={img} name="Serrow" class="Feral Druid" />
          <RaiderSmol img={img} name="Serrow" class="Feral Druid" />
          <RaiderSmol img={img} name="Serrow" class="Feral Druid" />
          <RaiderSmol img={img} name="Serrow" class="Feral Druid" />
        </Row>
      </PaddingContainer>
      <Footer />
    </Fragment>
  );
};

export default Roster;

// Ideas

// Raider images, single blocks that span the width.
// 45deg line that separates the image
// From the text container
// Flip back and forth from left to right
// On the image display?
