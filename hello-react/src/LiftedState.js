import React, { Component } from 'react';
import { FormPrenomLifted } from './FormPrenomLifted';
import { Hello } from './Hello';
import { HelloList } from './HelloList';

export class LiftedState extends Component {

  state = {
    prenoms: [''],
  };

  handlePrenom = (prenom) => {
    const prenoms = [...this.state.prenoms, prenom];
    this.setState({
      prenoms
    });
  };

  render() {
    return (
      <div>
        <h2>LiftedState</h2>
        <FormPrenomLifted handlePrenom={this.handlePrenom} />
        <HelloList prenoms={this.state.prenoms} />
      </div>
    );
  }
}
