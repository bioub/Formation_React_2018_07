import React, { Component } from 'react';

class FormPrenom extends Component {

  state = {
    prenom: '',
  };

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <form>
        <div>
          Prénom : <input name="prenom" onInput={this.handleInput} value={this.state.prenom} />
        </div>
      </form>
    );
  }
}

export { FormPrenom };