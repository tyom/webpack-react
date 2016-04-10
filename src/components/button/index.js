const React = require('react');

const styles = require('./button.css');

module.exports = React.createClass({
  propTypes: {
  },

  handleClick(evt) {
    console.log(evt);
  },

  render() {
    return (
      <button className="button" onClick={this.handleClick}>
        {this.props.children}
      </button>
    );
  }
});
