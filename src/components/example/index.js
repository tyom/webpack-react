const React = require('react');

const styles = require('./example.css');

module.exports = React.createClass({
  handleClick(evt) {
    console.log(evt);
  },

  render() {
    return (
      <div className={styles.example}>
        <h1>{this.props.children}</h1>
        <p>
          <button onClick={this.handleClick}>Click me</button>
        </p>
      </div>
    );
  }
});
