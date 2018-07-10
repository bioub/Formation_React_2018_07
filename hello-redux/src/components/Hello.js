import React from 'react';
import PropTypes from 'prop-types';

// Stateless Component
export const Hello = (props) => <div>Hello {props.prenom}</div>;

// https://reactjs.org/docs/typechecking-with-proptypes.html
Hello.defaultProps = {
  prenom: 'Jean',
};

Hello.propTypes = {
  prenom: PropTypes.string,
};
