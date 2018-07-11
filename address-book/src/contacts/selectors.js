import { createSelector } from 'reselect';

export const selectContactState = (state) => state.contacts;

export const selectContacts = createSelector(
  selectContactState,
  (contacts) => contacts.data,
);

export const selectContactsById = (state, id) => selectContactState(state).data.find((item) => item.id === id);

export const selectContactsIsFetching = createSelector(
  selectContactState,
  (contacts) => contacts.isFetching,
);
