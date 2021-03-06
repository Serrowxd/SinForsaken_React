import React, { Fragment } from 'react';
import { PaddingContainer, Row, Body } from '../styles/theme';
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
      <Body worky>
        <h1> This page is under maintenance! </h1>
      </Body>
      <PaddingContainer raider>
        <h1> Tanks </h1>
        <Row width="100%" raidrow>
          <RaiderSmol
            img={mariels.imgb}
            name={mariels.name}
            class={mariels.class}
            color={mariels.color}
            href="/mariels"
          />
          <RaiderSmol
            img={phobos.imgb}
            name={phobos.name}
            class={phobos.class}
            color={phobos.color}
            href="/phobos"
          />
          <RaiderSmol
            img={obearma.imgb}
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
            img={jit.imgb}
            name={jit.name}
            class={jit.class}
            color={jit.color}
            href="/jit"
          />
          <RaiderSmol
            img={packinlip.imgb}
            name={packinlip.name}
            class={packinlip.class}
            color={packinlip.color}
            href="/packinlip"
          />
          <RaiderSmol
            img={hypurz.imgb}
            name={hypurz.name}
            class={hypurz.class}
            color={hypurz.color}
            href="/hypurz"
          />
          <RaiderSmol
            img={soothee.imgb}
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
            img={gorbix.imgb}
            name={gorbix.name}
            class={gorbix.class}
            color={gorbix.color}
            href="/gorbix"
          />
          <RaiderSmol
            img={madikin.imgb}
            name={madikin.name}
            class={madikin.class}
            color={madikin.color}
            href="/madikin"
          />
          <RaiderSmol
            img={biigmeech.imgb}
            name={biigmeech.name}
            class={biigmeech.class}
            color={biigmeech.color}
            href="/biigmeech"
          />
          <RaiderSmol
            img={mallorean.imgb}
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
            img={warriorbuns.imgb}
            name={warriorbuns.name}
            class={warriorbuns.class}
            color={warriorbuns.color}
            href="/warriorbuns"
          />
          <RaiderSmol
            img={brarien.imgb}
            name={brarien.name}
            class={brarien.class}
            color={brarien.color}
            href="/brarien"
          />
          <RaiderSmol
            img={juggnut.imgb}
            name={juggnut.name}
            class={juggnut.class}
            color={juggnut.color}
            href="/juggnut"
          />
          <RaiderSmol
            img={vacoon.imgb}
            name={vacoon.name}
            class={vacoon.class}
            color={vacoon.color}
            href="/vacoon"
          />
          <RaiderSmol
            img={boxedkitten.imgb}
            name={boxedkitten.name}
            class={boxedkitten.class}
            color={boxedkitten.color}
            href="/boxedkitten"
          />
          <RaiderSmol
            img={mallc.imgb}
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
            img={saltydingus.imgb}
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
