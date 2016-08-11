import React from 'react';

import * as style from './style.css';

const List = ({children}) => (
  <ul className={style.List}>
    {children.map((item, i) =>
      <li key={i} className={style['List-item']}>{item}</li>
    )}
  </ul>
);

export default List;
