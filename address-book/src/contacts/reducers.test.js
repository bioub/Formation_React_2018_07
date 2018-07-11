import { contacts } from "./reducers";


it('should return initial state', () => {
  const nextState = contacts(undefined, { type: '@@INIT'});

  expect(nextState.data).toEqual([]);
  expect(nextState.isFetching).toBe(true);
});

it('should return next state', () => {
  const prevState = {
    isFetching: false,
    data: [],
  };
  const nextState = contacts(prevState, { type: 'CONTACTS_FETCHING'});

  expect(nextState.data).toEqual([]);
  expect(nextState.isFetching).toBe(true);
  expect(prevState).not.toBe(nextState);
});
