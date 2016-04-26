const React = require('react');

const styles = require('./exhibit.css');

const Stage = require('./stage');
const Code = require('./code');

module.exports = React.createClass({
  render() {
    if (!this.props.children) {return null;}
    
    let exhibit = this.props.children;
    let code = null;

    if (this.props.children.length === 2) {
      [exhibit, code] = this.props.children;
    }

    return (
      <div className={styles.exhibit}>
        <h2>{this.props.title}</h2>
        <Stage>{exhibit}</Stage>
        <Code>{code}</Code>
      </div>
    );
  }
});
