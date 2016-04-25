const React = require('react');

const Example = require('../components/example');

const styles = require('./app.css');

module.exports = React.createClass({
  render() {
    return (
      <div className={styles.Content}>
        <h1>Home</h1>
        <Example/>
      </div>
    );
  }
});
