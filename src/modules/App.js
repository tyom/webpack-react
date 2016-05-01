const styles = require('./app.css');

const React = require('react');

const GlobalNav = require('../styleguide/nav');

const navItems = [
  { label: 'Example', path: '/'},
  { label: 'Tabs', path: 'item'},
  { label: 'Forms', path: 'forms'}
];

module.exports = React.createClass({
  render() {
    return (
      <div className={styles.App}>
        <GlobalNav items={navItems}/>
        {this.props.children}
      </div>
    );
  }
});
