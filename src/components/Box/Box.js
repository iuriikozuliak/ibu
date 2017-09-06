import React from 'react';

import styles from './Box.css';

const Box = ({ children }) => (
  <div className = { styles.Box }>
    { children }
  </div>
);

export default Box;
