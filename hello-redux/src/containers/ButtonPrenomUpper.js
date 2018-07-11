import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPrenom } from '../selectors';
import { prenomChange } from '../actions';

class ButtonPrenomUpper extends Component {
  handleClick = () => {
    // soit ça, soit mapDispatchToProps
    this.props.dispatch(prenomChange(this.props.prenom.toUpperCase()));
  }

  render() {
    return <button onClick={this.handleClick}>{this.props.prenom}</button>
  }
}

const mapStateToProps = (state) => ({
  prenom: selectPrenom(state),
});

export const ButtonPrenomUpperConnected = connect(mapStateToProps)(ButtonPrenomUpper);