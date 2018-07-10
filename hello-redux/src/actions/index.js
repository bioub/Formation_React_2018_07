import { BUTTON_INCREMENT, PRENOM_CHANGE } from '../constants';

export const increment = (index, step = 1) => ({
  type: BUTTON_INCREMENT,
  step,
  index,
});

export const prenomChange = (value) => ({
  type: PRENOM_CHANGE,
  value,
});