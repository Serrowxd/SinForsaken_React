import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing';
import { Container } from './styles/theme';
import { Roster, Guides, OwO, JoinUs } from './reducer';
import raiderexp, {
  Serrow,
  Mariels,
  Phobos,
  Obearma,
  Deimos,
  Jit,
  Packinlip,
  Hypurz,
  Soothee,
  Yggralith,
  Gorbix,
  Madikin,
  Biigmeech,
  Mallorean,
  Warriorbuns,
  Brarien,
  Juggnut,
  Vacoon,
  Boxedkitten,
  Mallc,
  Oohemgee,
  Tox,
  Saltydingus,
  Holycarp,
} from './routes/raiders/raiderexp';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Container>
      <Route exact path="/" component={Landing} />
      <Route path="/roster" component={Roster} />
      <Route path="/guides" component={Guides} />
      <Route path="/owo" component={OwO} />
      <Route path="/join" component={JoinUs} />

      {/* Raider Routes */}
      <Route path="/serrow" component={Serrow} />
      <Route path="/mariels" component={Mariels} />
      <Route path="/phobos" component={Phobos} />
      <Route path="/obearma" component={Obearma} />
      <Route path="/deimos" component={Deimos} />
      <Route path="/jit" component={Jit} />
      <Route path="/packinlip" component={Packinlip} />
      <Route path="/hypurz" component={Hypurz} />
      <Route path="/soothee" component={Soothee} />
      <Route path="/yggralith" component={Yggralith} />
      <Route path="/gorbix" component={Gorbix} />
      <Route path="/biigmeech" component={Biigmeech} />
      <Route path="/mallorean" component={Mallorean} />
      <Route path="/warriorbuns" component={Warriorbuns} />
      <Route path="/brarien" component={Brarien} />
      <Route path="/juggnut" component={Juggnut} />
      <Route path="/vacoon" component={Vacoon} />
      <Route path="/boxedkitten" component={Boxedkitten} />
      <Route path="/mallc" component={Mallc} />
      <Route path="/oohemgee" component={Oohemgee} />
      <Route path="/tox" component={Tox} />
      <Route path="/saltydingus" component={Saltydingus} />
      <Route path="/holycarp" component={Holycarp} />
    </Container>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();

// We can run all our exports through one file
// We cannot dynamically create routes for each raider without creating a route..
// For each raider..
