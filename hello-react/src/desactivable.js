import React, { Component } from 'react';

export function desactivable(WrappedComponent) {

  class InnerComponent extends Component {
    render() {
      // filtre les propriétés du HOC, et celle du composant imbriqué (innerProps)
      const {show, ...innerProps} = this.props;
      return (
        <div>
          {show && <WrappedComponent {...innerProps} />}
          <button>Toggle</button>
        </div>
      )
    }
  }

  const innerName = WrappedComponent.displayName || WrappedComponent.name || 'WrappedComponent';
  InnerComponent.displayName = `desactivable(${innerName})`;

  return InnerComponent;
}