import React, { Component } from 'react';
import { Clock } from './Clock';

export class ClockDesactivable extends Component {

  state = {
    show: true,
  };

  onToggleClick = () => {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    return (
      <div>
        {this.state.show && <Clock />}
        <button onClick={this.onToggleClick}>Toggle</button>
      </div>
    );
  }
}