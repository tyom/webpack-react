const React = require('react');
const beautify = require('js-beautify').html;

const styles = require('./exhibit.css');

const Code = (props) => {
  if (!props.children) {return null;}
  
  return (
    <pre className={styles.code}>
      {props.beautify
        ? beautify(props.children, {indent_size: 2})
        : props.children
      }
    </pre>
  );
};

Code.defaultProps = {
  beautify: true
};

module.exports = Code;
