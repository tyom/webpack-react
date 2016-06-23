import React from 'react';
import Example from '../components/example';

import * as styles from './app/app.css';

module.exports = (props) =>
  <div className={styles.Content}>
    <h1>Home</h1>
    <Example/>
  </div>
;
