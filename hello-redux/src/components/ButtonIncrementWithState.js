import React, { Component } from 'react';

class ButtonIncrementWithState extends Component {
  state = {
    count: 0,
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>
  }
}

export { ButtonIncrementWithState };
