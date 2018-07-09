import React, { Component } from 'react';
import { Hello } from './Hello';
import uuid from 'uuid';

export class HelloList extends Component {
  state = {
    prenoms: ['Romain', 'Edouard'],
  };

  render() {
    const helloList = 
      this.state.prenoms
        .map((prenom) => <Hello name={prenom} key={uuid()} />);

    return (
      <div>
        <h2>List</h2>
        {helloList}
      </div>
    );
  }
}
