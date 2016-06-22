const React = require('react');

const styles = require('./app.css');

module.exports = (props) =>
  <div className={styles.App}>
    {props.children}
  </div>
;
