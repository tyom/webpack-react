import React from 'react';
import { Route, IndexRoute } from 'react-router';

module.exports = (
  <Route path="/" component={require('./app')}>
    <IndexRoute component={require('./home')}/>
    <Route path="another-page" component={require('./another-page')}/>
  </Route>
);
