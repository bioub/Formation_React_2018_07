import React from 'react';
import PropTypes from 'prop-types';
import { desactivable } from './desactivable';

// Stateless Component
export const Hello = (props) => <div>Hello {props.name}</div>;
export const HelloDesactivable = desactivable(Hello);

// https://reactjs.org/docs/typechecking-with-proptypes.html
Hello.defaultProps = {
  name: 'Jean',
};

Hello.propTypes = {
  name: PropTypes.string,
};
