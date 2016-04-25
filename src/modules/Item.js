const React = require('react');

const styles = require('./app.css');

module.exports = React.createClass({
  render() {
    return (
      <div className={styles.Content}>
        <h1>Item view</h1>
      </div>
    );
  }
});
