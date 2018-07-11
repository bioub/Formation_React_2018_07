import { getContactsFromApi } from './api';
import { CONTACTS_FETCHING, CONTACTS_FETCHED } from './constants';

export const fetchContacts = () => {
  return (dispatch) => {
    dispatch(contactsFetching());
    getContactsFromApi()
      .then((contacts) => {
        dispatch(contactsFetched(contacts));
      });
  };
};

/* ES8 (async/await) génère bcp de code dans le build
export const fetchContacts = () => {
  return async (dispatch) => {
    dispatch(contactsFetching());
    const contacts = await getContactsFromApi();
    dispatch(contactsFetched(contacts));
  };
};
*/

export const contactsFetching = () => ({
  type: CONTACTS_FETCHING,
});

export const contactsFetched = (payload) => ({
  type: CONTACTS_FETCHED,
  payload,
});
