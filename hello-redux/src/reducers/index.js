import { BUTTON_INCREMENT, PRENOM_CHANGE, USERS_RECEIVED } from '../constants';

export function count(state = 0, {type, step}) {
  switch (type) {
    case BUTTON_INCREMENT: 
      return state + step;
  }

  return state;
}

export function counts(state = [0, 0, 0], {type, index, step}) {
  switch (type) {
    case BUTTON_INCREMENT: 
      return [
        ...state.slice(0, index),
        count(state[index], {type, step}),
        ...state.slice(index + 1),
      ];
  }

  return state;
}

export function prenom(state = '', {type, value}) {
  switch (type) {
    case PRENOM_CHANGE:
      return value;
  }

  return state;
}

export function users(state = [], {type, users}) {
  switch (type) {
    case USERS_RECEIVED:
      return users;
  }

  return state;
}