import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { counts, prenom } from './reducers';

export const store = createStore(
  combineReducers({
    counts,
    prenom,
  }),
  composeWithDevTools(),
);

/*
{
  counts: [0, 0, 0, 0]
}
*/