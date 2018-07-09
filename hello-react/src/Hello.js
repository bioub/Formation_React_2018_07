import React from 'react';
import PropTypes from 'prop-types';

export const Hello = (props) => <div>Hello {props.name}</div>;

// https://reactjs.org/docs/typechecking-with-proptypes.html
Hello.defaultProps = {
  name: 'Jean',
};

Hello.propTypes = {
  name: PropTypes.string,
};
