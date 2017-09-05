import React     from 'react';
import PropTypes from 'prop-types';

import styles from './Card.css';

const Card = ({ children }) => (
  <div className = { styles.Card }>
    { children }
  </div>
);

Card.propTypes = {
  children: PropTypes.element.isRequired
};

export default Card;
