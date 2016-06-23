import React from 'react';
import { Link } from 'react-router';

import * as styles from './app/app.css';

module.exports = (props) =>
  <div className={styles.Content}>
    <h1>Another page</h1>
    <p>
      <Link to='/'>Home</Link>
    </p>
  </div>
;
