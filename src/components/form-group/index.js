const React = require('react');

const styles = require('./form-group.css');

module.exports = React.createClass({
  propTypes: {
  },

  render() {
    return (
      <div className="form-group">
        {this.props.children}
      </div>
    );
  }
});
