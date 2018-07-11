import { BUTTON_INCREMENT, PRENOM_CHANGE, USERS_RECEIVED } from '../constants';

export const increment = (index, step = 1) => ({
  type: BUTTON_INCREMENT,
  step,
  index,
});

export const prenomChange = (value) => ({
  type: PRENOM_CHANGE,
  value,
});

export const usersReceived = (users) => ({
  type: USERS_RECEIVED,
  users,
});

export const fetchUsers = () => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        dispatch(usersReceived(users));
      });
  }
}