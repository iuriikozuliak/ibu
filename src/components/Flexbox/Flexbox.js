import React     from 'react';
import PropTypes from 'prop-types';

import styles from './Flexbox.css';

const Flexbox = ({ children }) => (
  <div className = { styles.Flexbox }>
    { children }
  </div>
);

Flexbox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Flexbox;
