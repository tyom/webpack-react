const React = require('react');
const { Route, IndexRoute } = require('react-router');

module.exports = (
  <Route path="/" component={require('./app')}>
    <IndexRoute component={require('./home')}/>
    <Route path="/another-page" component={require('./another-page')}/>
  </Route>
);
