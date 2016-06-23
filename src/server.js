import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {RouterContext, match, createMemoryHistory} from 'react-router';

const routes = require('./routes');

module.exports = ({assets, template, path}, callback) => {
  const history = createMemoryHistory();
  const location = history.createLocation(path);

  match({routes, location}, (err, redirect, props) => {
    callback(null, template({
      html: ReactDOMServer.renderToStaticMarkup(<RouterContext {...props}/>),
      assets: assets
    }));
  });
};
