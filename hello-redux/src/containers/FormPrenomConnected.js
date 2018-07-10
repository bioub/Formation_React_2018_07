import { connect } from 'react-redux';
import { selectPrenom } from '../selectors';
import { FormPrenom } from '../components/FormPrenom';
import { prenomChange } from '../actions';

const mapStateToProps = (state) => ({
  prenom: selectPrenom(state),
});

const mapDispatchToProps = (dispatch) => ({
  handlePrenom: (event) => dispatch(prenomChange(event.target.value)),
});

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export const FormPrenomConnected = enhance(FormPrenom);