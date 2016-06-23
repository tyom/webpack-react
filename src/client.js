import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';

const routes = require('./routes');

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('container')
);
