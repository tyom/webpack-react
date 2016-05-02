const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {RouterContext, match, createMemoryHistory} = require('react-router');

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
