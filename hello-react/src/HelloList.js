import React, { PureComponent } from 'react';
import { Hello } from './Hello';
import uuid from 'uuid';

export class HelloList extends PureComponent {
  
  /*
  shouldComponentUpdate(nextProps) {
    return this.props.prenoms !== nextProps.prenoms;
  }
  */

  render() {
    console.log('render HelloList');
    const helloList = 
      this.props.prenoms
        .map((prenom) => <Hello name={prenom} key={uuid()} />);

    return (
      <div>
        <h2>List</h2>
        {helloList}
      </div>
    );
  }
}
