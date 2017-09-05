import React     from 'react';
import PropTypes from 'prop-types';

import styles from './TextInput.css';

const TextInput = ({
  placeholder
}) => (
  <input
    type        = "text"
    className   = { styles.TextInput }
    placeholder = { placeholder } />
);

TextInput.defaultProps = {
  placeholder: ''
};

TextInput.propTypes = {
  placeholder: PropTypes.String
};

export default TextInput;
