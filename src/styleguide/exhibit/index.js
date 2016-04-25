const React = require('react');

const styles = require('./exhibit.css');

const Stage = require('./stage');
const Code = require('./code');

module.exports = React.createClass({
  render() {
    return (
      <div className={styles.exhibit}>
        <h2>{this.props.title}</h2>
        <Stage>{this.props.children}</Stage>
        <Code beautify={true}>{this.props.code}</Code>
      </div>
    );
  }
});
