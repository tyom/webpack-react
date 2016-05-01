const styles = require('./app.css');

const React = require('react');

const GlobalNav = require('../styleguide/nav');

module.exports = React.createClass({
  render() {
    return (
      <div className={styles.App}>
        <GlobalNav items={[
          { label: 'Home', path: '/'},
          { label: 'Item', path: 'item'}
        ]}/>
        {this.props.children}
      </div>
    );
  }
});
