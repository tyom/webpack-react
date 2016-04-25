const React = require('react');

const styles = require('./exhibit.css');

module.exports = React.createClass({
  render() {
    return (
      <div className={styles.stage}>{this.props.children}</div>
    );
  }
});
