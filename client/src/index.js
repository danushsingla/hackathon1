import React from 'react';
import ReactDOM from 'react-dom'; // Use 'react-dom' for React 17
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Switch is used in v5
import App from './App';
import HomePage from './HomePage';
import EventPage from './EventPage';
import BasketballPage from './BasketballPage.js';
import TrackPage from './TrackPage.js';
import SoccerPage from './SoccerPage.js';
import SwimmingPage from './SwimmingPage.js';
import './index.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/home" component={HomePage} />
      <Route path="/events" component={EventPage} />
      <Route path="/basketball" component={BasketballPage} />
      <Route path="/track" component={TrackPage} />
      <Route path="/soccer" component={SoccerPage} />
      <Route path="/swimming" component={SwimmingPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
