const React = require('react');

const Exhibit = require('../styleguide/exhibit');
const Example = require('../components/example');

const styles = require('./app.css');

module.exports = React.createClass({
  render() {
    return (
      <div className={styles.Content}>
        <h1>Home view</h1>
        <Exhibit title="Example exhibit">
          <Example/>
          {`
            <div className={styles.example}>
              <h2>Example component</h2>
              <p><button onClick={this.handleClick}>Click me</button></p>
            </div>
          `}
        </Exhibit>
      </div>
    );
  }
});
