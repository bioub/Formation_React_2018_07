import React, { Component } from 'react';
import { Hello } from './Hello';
import { Clock } from './Clock';
import { ClockDesactivable } from './ClockDesactivable';

class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Hello name="Romain" /> {/* React.createElement(Hello, {name: 'Romain'}) */}
        {/* <Hello name={123} /> */}
        <Clock format="HH:mm:ss" />
        <ClockDesactivable />
      </div>
    );
  }
}

export default App;
