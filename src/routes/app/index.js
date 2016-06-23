import React from 'react';

import * as styles from './app.css';

module.exports = (props) =>
  <div className={styles.App}>
    {props.children}
  </div>
;
