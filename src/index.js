import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Container } from './styles/theme';
import { Roster } from './reducer';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Container>
      <Route exact path="/" component={App} />
      <Route path="/roster" component={Roster} />
    </Container>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
