const React = require('react');
const { Route, IndexRoute } = require('react-router');

const app = require('./modules/app');
const home = require('./pages/home');
const tabs = require('./pages/tabs');

module.exports = (
  <Route path="/" component={app}>
    <IndexRoute component={home}/>
    <Route path="/tabs" component={tabs}/>
  </Route>
);
