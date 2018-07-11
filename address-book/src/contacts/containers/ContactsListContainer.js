import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ContactsList from '../components/ContactsList';
import { selectContacts, selectContactsIsFetching } from '../selectors';
import { fetchContacts } from '../actions';

const mapStateToProps = (state) => ({
  contacts: selectContacts(state),
  isFetching: selectContactsIsFetching(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
)

export default enhance(ContactsList);