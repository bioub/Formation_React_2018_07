import { contactsFetched, contactsFetching, fetchContacts } from "./actions";
import { getContactsFromApi } from './api';

jest.mock('./api');


it('should create action contactsFetching', () => {
  const action = contactsFetching();

  expect(action.type).toEqual('CONTACTS_FETCHING');
});

it('should create action contactsFetched', () => {
  const contacts = [{id: '123', name: 'John'}];
  const action = contactsFetched(contacts);
  
  expect(action.type).toEqual('CONTACTS_FETCHED');
  expect(action.payload).toEqual(contacts);
});

it('should call fetchContacts correctly', () => {
  const contacts = [{id: '123', name: 'John'}];

  const thunk = fetchContacts();

  const mockDispatch = jest.fn();
  getContactsFromApi.mockImplementation(() => Promise.resolve(contacts))

  thunk(mockDispatch);

  expect(mockDispatch).toHaveBeenCalledTimes(1);
});