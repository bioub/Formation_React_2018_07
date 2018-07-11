import { createSelector } from 'reselect';

export const selectContactState = (state) => state.contacts;

export const selectContacts = createSelector(
  selectContactState,
  (contacts) => contacts.data,
);

export const selectContactsIsFetching = createSelector(
  selectContactState,
  (contacts) => contacts.isFetching,
);
