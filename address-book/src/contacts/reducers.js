import { CONTACTS_FETCHING, CONTACTS_FETCHED } from './constants';

const initialState = {
  data: [],
  isFetching: true,
};

export const contacts = (state = initialState, { type, payload }) => {
  switch (type) {
    case CONTACTS_FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case CONTACTS_FETCHED:
      return {
        ...state,
        data: payload,
        isFetching: false,
      };
  }

  return state;
};