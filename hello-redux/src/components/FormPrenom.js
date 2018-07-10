import React from 'react';

const FormPrenom = (props) => (
  <div>
    Prénom : <input name="prenom" onInput={props.handlePrenom} value={props.prenom} />
  </div>
);

export { FormPrenom };