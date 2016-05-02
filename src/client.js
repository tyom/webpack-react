const React = require('react');
const ReactDOM = require('react-dom');
const {Router, browserHistory} = require('react-router');

const routes = require('./routes');

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('container')
);
