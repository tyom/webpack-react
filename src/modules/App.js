const styles = require('./app.css');

const React = require('react');

const Nav = require('../styleguide/nav');

const navItems = [
  { label: 'Example', path: '/'},
  { label: 'Tabs', path: 'tabs'}
];

module.exports = (props) =>
  <div className={styles.App}>
    <Nav items={navItems}/>
    {props.children}
  </div>
;
