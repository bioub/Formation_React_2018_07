import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectContactsById, selectContactsIsFetching } from '../selectors';
import ContactShow from '../components/ContactShow';

const mapStateToProps = (state, {match}) => {
  const id = Number(match.params.id);
  return ({
    contact: selectContactsById(state, id),
    isFetching: selectContactsIsFetching(state),
  });
}

const enhance = connect(
  mapStateToProps,
);

export default enhance(ContactShow);