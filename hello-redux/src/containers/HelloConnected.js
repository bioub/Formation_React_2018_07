import { connect } from 'react-redux';
import { Hello } from '../components/Hello';
import { selectPrenom } from '../selectors';

const mapStateToProps = (state) => ({
  prenom: selectPrenom(state),
});

const enhance = connect(
  mapStateToProps,
);

export const HelloConnected = enhance(Hello);