import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/api';
import { ITableItem } from '../../interfaces/Table.interface';

export const fetchTable = createAsyncThunk('table/fetchTable', 
async () => {
  const { data } = await api.getTable();
  return data;
});

export const addData = createAsyncThunk(
  'table/add',
  async ({ name, birthday_date, email, phone_number, address }: ITableItem) => {
    const { data } = await api.postData({ name, birthday_date, email, phone_number, address });
    return data;
  },
);
