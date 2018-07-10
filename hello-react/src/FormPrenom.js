import React, { Component } from 'react';

class FormPrenom extends Component {

  state = {
    prenom: '',
    nom: '',
  };

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value.toUpperCase(),
    });
  };

  // controlled component (les valeurs sont gérées par composant)
  render() {
    return (
      <form>
        <div>
          Prénom : <input name="prenom" onInput={this.handleInput} value={this.state.prenom} />
        </div>
        <div>
          Nom : <input name="nom" onInput={this.handleInput} value={this.state.nom} />
        </div>
      </form>
    );
  }
}

export { FormPrenom };