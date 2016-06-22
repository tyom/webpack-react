const React = require('react');
const { Link } = require('react-router');

const styles = require('./app/app.css');

module.exports = (props) =>
  <div className={styles.Content}>
    <h1>Another page</h1>
    <p>
      <Link to='/'>Home</Link>
    </p>
  </div>
;
