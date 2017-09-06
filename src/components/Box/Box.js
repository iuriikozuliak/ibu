import React      from 'react';
import PropTypes  from 'prop-types';
import classnames from 'classnames';

import styles     from './Box.css';

const Box = ({
  children,
  isBig,
  isBordered,
  isSuccess,
  isRounded
}) => (
  <div className = { classnames(styles.Box, {
    [styles.Bordered]: isBordered,
    [styles.Big]: isBig,
    [styles.Success]: isSuccess,
    [styles.Rounded]: isRounded,
  }) }>
    { children }
  </div>
);

Box.defaultProps = {
  isBig: false,
  isBordered: false,
  isSuccess: false,
  isRounded: false
};

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  isBig: PropTypes.bool,
  isBordered: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isRounded: PropTypes.bool,
};

export default Box;
