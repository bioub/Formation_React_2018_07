import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormPrenomLifted extends Component {

  handleInput = (event) => {
    this.props.handlePrenom(event.target.value);
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    console.log('render FormPrenomLifted');
    return (
      <form>
        <div>
          Prénom : <input name="prenom" onInput={this.handleInput} />
        </div>
      </form>
    );
  }
}

FormPrenomLifted.propTypes = {
  handlePrenom: PropTypes.func.isRequired,
};

export { FormPrenomLifted };