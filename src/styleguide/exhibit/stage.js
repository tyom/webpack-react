const React = require('react');

const styles = require('./exhibit.css');

module.exports = (props) =>
  <div className={styles.stage}>{props.children}</div>
;
