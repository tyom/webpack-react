const React = require('react');

const styles = require('./exhibit.css');

const Stage = require('./stage');
const Code = require('./code');

const Exhibit = (props) => {
  if (!props.children) {return null;}

  let exhibit = props.children;
  let code = null;

  if (props.children.length === 2) {
    [exhibit, code] = props.children;
  }

  return (
    <div className={styles.exhibit}>
      <h2>{props.title}</h2>
      <Stage>{exhibit}</Stage>
      <Code>{code}</Code>
    </div>
  );
};

module.exports = Exhibit;
