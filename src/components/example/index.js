import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import * as styles from './example.css';

const Icons = require('react-icons/lib/ti');

const Example = React.createClass({
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

exports.default = Example;
module.exports = exports.default;
