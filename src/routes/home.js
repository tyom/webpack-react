const React = require('react');

const Example = require('../components/example');

const styles = require('./app/app.css');

module.exports = (props) =>
  <div className={styles.Content}>
    <h1>Home</h1>
    <Example/>
  </div>
;
