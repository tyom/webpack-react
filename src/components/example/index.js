const React = require('react');
const { Link } = require('react-router');
const Icons = require('react-icons/lib/ti');

const styles = require('./example.css');

const classNames = require('classnames');

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
    const buttonClass = classNames({
      [styles['is-active']]: this.state.isActive
    });

    return (
      <div className={styles.example}>
        <h3>Example component</h3>
        <p>
          <button onClick={this.handleClick} className={buttonClass}>
            <Icons.TiCompass/> Click me
          </button>
        </p>
        <p>
          <Link to='/another-page'>Another page</Link>
        </p>
      </div>
    );
  }
});
