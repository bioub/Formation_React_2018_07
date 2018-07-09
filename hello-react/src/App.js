import React, { Component } from 'react';
import { Hello } from './Hello';
import { Clock } from './Clock';
import { ClockDesactivable } from './ClockDesactivable';
import { FormPrenom } from './FormPrenom';
import { LiftedState } from './LiftedState';
import { HelloList } from './HelloList';

class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Hello name="Romain" /> {/* React.createElement(Hello, {name: 'Romain'}) */}
        {/* <Hello name={123} /> */}
        <Clock format="HH:mm:ss" />
        <ClockDesactivable />
        <FormPrenom />
        <LiftedState />
        <HelloList />
      </div>
    );
  }
}

export default App;
