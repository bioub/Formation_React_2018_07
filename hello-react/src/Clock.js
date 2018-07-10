import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

export class Clock extends Component {

  // ESNext Stage 3 (pas encore normé)
  state = {
    now: new Date(),
  };

  componentDidMount() {
    this._intervalId = setInterval(() => {
      this.setState({ // merge (du premier niveau, pas récursif) avec le state actuel
        now: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._intervalId);
  }

  render() {
    return <div>{format(this.state.now, this.props.format)}</div>;
  }
}

Clock.defaultProps = {
  format: 'HH:mm:ss',
};

Clock.propTypes = {
  format: PropTypes.string,
};