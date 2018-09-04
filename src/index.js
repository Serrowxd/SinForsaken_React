import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing';
import { Container } from './styles/theme';
import { Roster, Guides, OwO, JoinUs } from './reducer';
import { Serrow } from './routes/raiders';
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

      <Route path="/serrow" component={Serrow} />
    </Container>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
