import React     from 'react';
import PropTypes from 'prop-types';
import Box       from 'components/Box';

import styles from './TextInput.css';

const TextInput = ({
  placeholder,
  onChange,
  name,
  value,
  error,
  type
}) => (
  <Box>
    <input
      type        = { type }
      name        = { name }
      className   = { styles.TextInput }
      value       = { value }
      placeholder = { placeholder }
      onChange    = { onChange } />
    { error &&
      <div className = { styles.TextInputError }>
        { error }
      </div>
    }
  </Box>
);

TextInput.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
  error: ''
};

TextInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
};

export default TextInput;
