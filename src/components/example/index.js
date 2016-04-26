const React = require('react');

const styles = require('./example.css');

const classnames = require('classnames');

module.exports = React.createClass({
  getInitialState() {
    return {
      isActive: false
    }
  },

  handleClick(evt) {
    console.log(evt);
    this.setState({
      isActive: !this.state.isActive
    });
  },

  render() {
    const buttonClass = classnames({
      [styles['is-active']]: this.state.isActive
    });

    return (
      <div className={styles.example}>
        <h3>Example component</h3>
        <p>
          <button onClick={this.handleClick} className={buttonClass}>
            Click me
          </button>
        </p>
      </div>
    );
  }
});
