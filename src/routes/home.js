import React from 'react';
import List from '../components/list';
import Item from '../components/example';

import * as styles from './app/app.css';

module.exports = (props) => (
  <div className={styles.Content}>
    <h1>Home</h1>
    <List>
      <Item title="Wand"/>
      <Item title="Glacier"/>
    </List>
  </div>
);
