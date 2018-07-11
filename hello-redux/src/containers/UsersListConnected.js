import { connect } from 'react-redux';
import { selectUsers } from '../selectors';
import { UsersList } from '../components/UsersList';
import { fetchUsers } from '../actions';

const mapStateToProps = (state) => ({
  users: selectUsers(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps,
);


export const UsersListConnected = enhance(UsersList);