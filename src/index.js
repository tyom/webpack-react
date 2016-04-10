const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');
const App = require('./components/App');

// Client render
if (typeof document !== 'undefined') {
  ReactDOM.render(<App/>, document.getElementById('container'));
}

module.exports = ({template, assets}, callback) => {
  const html = ReactDOMServer.renderToStaticMarkup(<App/>);
  callback(null, template({html, assets}));
};
