const React = require('react');

const Exhibit = require('../styleguide/exhibit');
const Example = require('../components/example');

const styles = require('../modules/app.css');

module.exports = (props) =>
  <div className={styles.Content}>
    <h1>Home</h1>
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
;
