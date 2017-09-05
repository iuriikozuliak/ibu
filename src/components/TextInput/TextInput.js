import React     from 'react';
import PropTypes from 'prop-types';

import styles from './TextInput.css';

const TextInput = ({
  placeholder,
  onChange,
  name,
  value,
  type
}) => (
  <input
    type        = { type }
    name        = { name }
    className   = { styles.TextInput }
    value       = { value }
    placeholder = { placeholder }
    onChange    = { onChange } />
);

TextInput.defaultProps = {
  type: 'text',
  placeholder: '',
  value: ''
};

TextInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default TextInput;
