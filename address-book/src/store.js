import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { contacts } from './contacts/reducers';

export const store = createStore(
  combineReducers({
    contacts,
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