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
          <RaiderSmol img={img} name="Mariels" class="Blood DK" />
          <RaiderSmol img={img} name="Phobos" class="Prot Warrior" />
          <RaiderSmol img={img} name="Obearma" class="Blood DK" />
        </Row>
        <h1> Healers </h1>
        <Row width="100%" raidrow>
          <RaiderSmol img={img} name="Deimos" class="Holy Paladin" />
          <RaiderSmol img={img} name="Jit" class="Resto Shaman" />
          <RaiderSmol img={img} name="Packinlip" class="Mistweaver Monk" />
          <RaiderSmol img={img} name="Hypurz" class="Resto Druid" />
          <RaiderSmol img={img} name="Soothee" class="Disc Priest" />
        </Row>
        <h1> DPS </h1>
        <Row width="100%" raidrow wrap="wrap">
          <RaiderSmol img={img} name="Yggralith" class="Havoc DH" />
          <RaiderSmol img={img} name="Gorbix" class="? Rogue" />
          <RaiderSmol img={img} name="Madikin" class="? Rogue" />
          <RaiderSmol img={img} name="Biigmeech" class="? Warrior" />
          <RaiderSmol img={img} name="Mallorean" class="Fury Warrior" />
          <RaiderSmol img={img} name="Serrow" class="Feral Druid" />
          <RaiderSmol img={img} name="Link" class="? Warrior" />
          <RaiderSmol img={img} name="Brarien" class="Ret Paladin" />
          <RaiderSmol img={img} name="Juggnut" class="? Rogue" />
          <RaiderSmol img={img} name="Vacoon" class="? Warrior" />
          <RaiderSmol img={img} name="Boxedkitten" class="BM Hunter" />
          <RaiderSmol img={img} name="Mallc" class="? Warlock" />
          <RaiderSmol img={img} name="OohEhmGee" class="Arcane Mage" />
          <RaiderSmol img={img} name="Tox" class="? Shaman" />
          <RaiderSmol img={img} name="Saltydingus" class="? Mage" />
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
