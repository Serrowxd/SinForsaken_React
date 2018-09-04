import React, { Fragment } from 'react';
import { PaddingContainer, Row } from '../styles/theme';
import { Navigation, Footer, RaiderSmol } from '../reducer';

import img from '../assets/serrowattak.png';
import img2 from '../assets/deimos.png';
import img3 from '../assets/ygg.png';
import img4 from '../assets/oohehmgee.png';
import img5 from '../assets/carp.png';
import img6 from '../assets/tox.png';

import imgtemp from '../assets/sincakenb.png';

const Roster = () => {
  return (
    <Fragment>
      <Navigation />
      <PaddingContainer raider>
        <h1> Tanks </h1>
        <Row width="100%" raidrow>
          <RaiderSmol
            img={imgtemp}
            name="Mariels"
            class="Blood DK"
            color="red"
            href=""
          />
          <RaiderSmol
            img={imgtemp}
            name="Phobos"
            class="Prot Warrior"
            color="tan"
            href=""
          />
          <RaiderSmol
            img={imgtemp}
            name="Obearma"
            class="Blood DK"
            color="red"
            href=""
          />
        </Row>
        <h1> Healers </h1>
        <Row width="100%" raidrow>
          <RaiderSmol
            img={img2}
            name="Deimos"
            class="Holy Paladin"
            color="pink"
            href=""
          />
          <RaiderSmol
            img={imgtemp}
            name="Jit"
            class="Resto Shaman"
            color="blue"
            href=""
          />
          <RaiderSmol
            img={imgtemp}
            name="Packinlip"
            class="Mistweaver Monk"
            color="lightgreen"
            href=""
          />
          <RaiderSmol
            img={imgtemp}
            name="Hypurz"
            class="Resto Druid"
            color="orange"
            href=""
          />
          <RaiderSmol
            img={imgtemp}
            name="Soothee"
            class="Disc Priest"
            href=""
          />
        </Row>
        <h1> DPS </h1>
        <Row width="100%" raidrow wrap="wrap">
          <RaiderSmol
            img={img3}
            name="Yggralith"
            class="Havoc DH"
            color="purple"
            href=""
          />
          <RaiderSmol
            img={imgtemp}
            name="Gorbix"
            class="? Rogue"
            color="yellow"
            href=""
          />
          <RaiderSmol
            img={imgtemp}
            name="Madikin"
            class="? Rogue"
            color="yellow"
            href=""
          />
          <RaiderSmol
            img={imgtemp}
            name="Biigmeech"
            class="? Warrior"
            color="tan"
            href=""
          />
          <RaiderSmol
            img={imgtemp}
            name="Mallorean"
            class="Fury Warrior"
            color="tan"
            href=""
          />
          <RaiderSmol
            img={img}
            name="Serrow"
            class="Feral Druid"
            color="orange"
            href="/serrow"
          />
          <RaiderSmol
            img={imgtemp}
            name="Link"
            class="? Warrior"
            color="tan"
            href=""
          />
          <RaiderSmol
            img={imgtemp}
            name="Brarien"
            class="Ret Paladin"
            color="pink"
            href=""
          />
          <RaiderSmol
            img={imgtemp}
            name="Juggnut"
            class="? Rogue"
            color="yellow"
            href=""
          />
          <RaiderSmol
            img={imgtemp}
            name="Vacoon"
            class="? Warrior"
            color="tan"
            href=""
          />
          <RaiderSmol
            img={imgtemp}
            name="Boxedkitten"
            class="BM Hunter"
            color="green"
            href=""
          />
          <RaiderSmol img={imgtemp} name="Mallc" class="? Warlock" href="" />
          <RaiderSmol
            img={img4}
            name="OohEhmGee"
            class="Arcane Mage"
            color="teal"
            href=""
          />
          <RaiderSmol
            img={img6}
            name="Tox"
            class="? Shaman"
            color="blue"
            href=""
          />
          <RaiderSmol
            img={imgtemp}
            name="Saltydingus"
            class="? Mage"
            color="teal"
            href=""
          />
        </Row>
        <h1> Support Squad </h1>
        <Row width="100%" raidrow>
          <RaiderSmol
            img={img5}
            name="Holy Carp"
            class="Material Farmer"
            color=""
            href=""
            fix="center !important"
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
