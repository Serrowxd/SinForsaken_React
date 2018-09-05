import React, { Fragment } from 'react';
import { PaddingContainer, Row } from '../styles/theme';
import { Navigation, Footer, RaiderSmol } from '../reducer';

import {
  serrow,
  mariels,
  phobos,
  obearma,
  deimos,
  jit,
  packinlip,
  hypurz,
  soothee,
  yggralith,
  gorbix,
  madikin,
  biigmeech,
  mallorean,
  warriorbuns,
  brarien,
  juggnut,
  vacoon,
  boxedkitten,
  mallc,
  oohemgee,
  tox,
  saltydingus,
  holycarp,
} from '../Raiders';

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
            img={mariels.imgs}
            name={mariels.name}
            class={mariels.class}
            color={mariels.color}
            href="/mariels"
          />
          <RaiderSmol
            img={imgtemp}
            name={phobos.name}
            class={phobos.class}
            color={phobos.color}
            href="/phobos"
          />
          <RaiderSmol
            img={imgtemp}
            name={obearma.name}
            class={obearma.class}
            color={obearma.color}
            href="/obearma"
          />
        </Row>
        <h1> Healers </h1>
        <Row width="100%" raidrow>
          <RaiderSmol
            img={img2}
            name={deimos.name}
            class={deimos.class}
            color={deimos.color}
            href="/deimos"
          />
          <RaiderSmol
            img={imgtemp}
            name={jit.name}
            class={jit.class}
            color={jit.color}
            href="/jit"
          />
          <RaiderSmol
            img={imgtemp}
            name={packinlip.name}
            class={packinlip.class}
            color={packinlip.color}
            href="/packinlip"
          />
          <RaiderSmol
            img={imgtemp}
            name={hypurz.name}
            class={hypurz.class}
            color={hypurz.color}
            href="/hypurz"
          />
          <RaiderSmol
            img={imgtemp}
            name={soothee.name}
            class={soothee.class}
            color={soothee.color}
            href="/soothee"
          />
        </Row>
        <h1> DPS </h1>
        <Row width="100%" raidrow>
          <RaiderSmol
            img={img3}
            name={yggralith.name}
            class={yggralith.class}
            color={yggralith.color}
            href="/yggralith"
          />
          <RaiderSmol
            img={imgtemp}
            name={gorbix.name}
            class={gorbix.class}
            color={gorbix.color}
            href="/gorbix"
          />
          <RaiderSmol
            img={imgtemp}
            name={madikin.name}
            class={madikin.class}
            color={madikin.color}
            href="/madikin"
          />
          <RaiderSmol
            img={imgtemp}
            name={biigmeech.name}
            class={biigmeech.class}
            color={biigmeech.color}
            href="/biigmeech"
          />
          <RaiderSmol
            img={imgtemp}
            name={mallorean.name}
            class={mallorean.class}
            color={mallorean.color}
            href="/mallorean"
          />
          <RaiderSmol
            img={img}
            name={serrow.name}
            class={serrow.class}
            color={serrow.color}
            href="/serrow"
          />
          <RaiderSmol
            img={imgtemp}
            name={warriorbuns.name}
            class={warriorbuns.class}
            color={warriorbuns.color}
            href="/warriorbuns"
          />
          <RaiderSmol
            img={imgtemp}
            name={brarien.name}
            class={brarien.class}
            color={brarien.color}
            href="/brarien"
          />
          <RaiderSmol
            img={imgtemp}
            name={juggnut.name}
            class={juggnut.class}
            color={juggnut.color}
            href="/juggnut"
          />
          <RaiderSmol
            img={imgtemp}
            name={vacoon.name}
            class={vacoon.class}
            color={vacoon.color}
            href="/vacoon"
          />
          <RaiderSmol
            img={imgtemp}
            name={boxedkitten.name}
            class={boxedkitten.class}
            color={boxedkitten.color}
            href="/boxedkitten"
          />
          <RaiderSmol
            img={imgtemp}
            name={mallc.name}
            class={mallc.class}
            color={mallc.color}
            href="/mallc"
          />
          <RaiderSmol
            img={img4}
            name={oohemgee.name}
            class={oohemgee.class}
            color={oohemgee.color}
            href="/oohemgee"
          />
          <RaiderSmol
            img={img6}
            name={tox.name}
            class={tox.class}
            color={tox.color}
            href="/tox"
          />
          <RaiderSmol
            img={imgtemp}
            name={saltydingus.name}
            class={saltydingus.class}
            color={saltydingus.color}
            href="/saltydingus"
          />
        </Row>
        <h1> Support Squad </h1>
        <Row width="100%" raidrow>
          <RaiderSmol
            img={img5}
            name={holycarp.name}
            class={holycarp.class}
            color={holycarp.color}
            href="/holycarp"
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
