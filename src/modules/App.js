require('./app.css');

const React = require('react');

const Nav = require('../components/nav');

module.exports = React.createClass({
  render() {
    return (
      <div id="app">
        <Nav/>
        {this.props.children}
      </div>
    );
  }
});
