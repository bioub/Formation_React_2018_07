import React, { Component } from 'react';

// Higher Order Component (hoc)
export function desactivable(WrappedComponent) {

  class InnerComponent extends Component {
    state = {
      show: this.props.show,
    }

    handleClick = () => {
      this.setState((prevState) => ({
        show: !prevState.show,
      }));
    }

    render() {
      // filtre les propriétés du HOC, et celle du composant imbriqué (innerProps)
      const {show, ...innerProps} = this.props;
      return (
        <div>
          {this.state.show && <WrappedComponent {...innerProps} />}
          <button onClick={this.handleClick}>Toggle</button>
        </div>
      )
    }
  }

  const innerName = WrappedComponent.displayName || WrappedComponent.name || 'WrappedComponent';
  InnerComponent.displayName = `desactivable(${innerName})`;

  return InnerComponent;
}