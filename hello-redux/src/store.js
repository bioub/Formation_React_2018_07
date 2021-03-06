import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { counts, prenom, users } from './reducers';
import thunk from 'redux-thunk';

export const store = createStore(
  combineReducers({
    counts,
    prenom,
    users,
  }),
  // preloadedState,
  composeWithDevTools(
    applyMiddleware(thunk)
  ),
);

/*
{
  counts: [0, 0, 0, 0]
}
*/