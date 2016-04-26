const React = require('react');
const beautify = require('js-beautify').html;

const styles = require('./exhibit.css');

module.exports = React.createClass({
  getDefaultProps() {
    return {
      beautify: true
    }
  },

  render() {
    if (!this.props.children) {return null;}
    
    return (
      <pre className={styles.code}>
        {this.props.beautify
          ? beautify(this.props.children, {indent_size: 2})
          : this.props.children
        }
      </pre>
    );
  }
});
