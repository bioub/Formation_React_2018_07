import React from 'react';
import PropTypes from 'prop-types';

const ButtonIncrement = ({ count, increment }) => (
  <button onClick={increment}>{count}</button>
);

ButtonIncrement.propTypes = {
  count: PropTypes.number.isRequired,
};

export { ButtonIncrement };
