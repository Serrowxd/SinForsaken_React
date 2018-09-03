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
          <RaiderSmol img={img} name="Mariels" class="Blood DK" color="red" />
          <RaiderSmol
            img={img}
            name="Phobos"
            class="Prot Warrior"
            color="tan"
          />
          <RaiderSmol img={img} name="Obearma" class="Blood DK" color="red" />
        </Row>
        <h1> Healers </h1>
        <Row width="100%" raidrow>
          <RaiderSmol
            img={img}
            name="Deimos"
            class="Holy Paladin"
            color="pink"
          />
          <RaiderSmol img={img} name="Jit" class="Resto Shaman" color="blue" />
          <RaiderSmol
            img={img}
            name="Packinlip"
            class="Mistweaver Monk"
            color="lightgreen"
          />
          <RaiderSmol
            img={img}
            name="Hypurz"
            class="Resto Druid"
            color="orange"
          />
          <RaiderSmol img={img} name="Soothee" class="Disc Priest" />
        </Row>
        <h1> DPS </h1>
        <Row width="100%" raidrow wrap="wrap">
          <RaiderSmol
            img={img}
            name="Yggralith"
            class="Havoc DH"
            color="purple"
          />
          <RaiderSmol img={img} name="Gorbix" class="? Rogue" color="yellow" />
          <RaiderSmol img={img} name="Madikin" class="? Rogue" color="yellow" />
          <RaiderSmol
            img={img}
            name="Biigmeech"
            class="? Warrior"
            color="tan"
          />
          <RaiderSmol
            img={img}
            name="Mallorean"
            class="Fury Warrior"
            color="tan"
          />
          <RaiderSmol
            img={img}
            name="Serrow"
            class="Feral Druid"
            color="orange"
          />
          <RaiderSmol img={img} name="Link" class="? Warrior" color="tan" />
          <RaiderSmol
            img={img}
            name="Brarien"
            class="Ret Paladin"
            color="pink"
          />
          <RaiderSmol img={img} name="Juggnut" class="? Rogue" color="yellow" />
          <RaiderSmol img={img} name="Vacoon" class="? Warrior" color="tan" />
          <RaiderSmol
            img={img}
            name="Boxedkitten"
            class="BM Hunter"
            color="green"
          />
          <RaiderSmol img={img} name="Mallc" class="? Warlock" />
          <RaiderSmol
            img={img}
            name="OohEhmGee"
            class="Arcane Mage"
            color="teal"
          />
          <RaiderSmol img={img} name="Tox" class="? Shaman" color="blue" />
          <RaiderSmol
            img={img}
            name="Saltydingus"
            class="? Mage"
            color="teal"
          />
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
