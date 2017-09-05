import React     from 'react';
import PropTypes from 'prop-types';

import styles from './TextInput.css';

const TextInput = ({
  placeholder,
  onChange,
  name,
  value
}) => (
  <input
    type        = "text"
    name        = { name }
    className   = { styles.TextInput }
    value       = { value }
    placeholder = { placeholder }
    onChange    = { onChange } />
);

TextInput.defaultProps = {
  placeholder: '',
  value: ''
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default TextInput;
