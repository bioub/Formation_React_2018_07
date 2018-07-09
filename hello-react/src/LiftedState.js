import React, { Component } from 'react';
import { FormPrenomLifted } from './FormPrenomLifted';
import { Hello } from './Hello';

export class LiftedState extends Component {

  state = {
    prenom: '',
  };

  handlePrenom = (prenom) => {
    this.setState({
      prenom,
    });
  };

  render() {
    return (
      <div>
        <h2>LiftedState</h2>
        <FormPrenomLifted handlePrenom={this.handlePrenom} />
        <Hello name={this.state.prenom} />
      </div>
    );
  }
}
