import { RootState } from '../store';

export const getAllContacts = (state:RootState) => state.table.items;

export const getVisibleTable = (state:RootState) => {
  const allContacts = getAllContacts(state);

  return allContacts
};
