import { createSlice } from '@reduxjs/toolkit';
import { fetchTable, addData } from './operations';
import { ITableItem } from '../../interfaces/Table.interface';

interface IInitialState {
  items: ITableItem[];
  isError: boolean;
  isSelected: null;
  isLoading: boolean;
}

const initialState: IInitialState = {
  items: [],
  isError: false,
  isSelected: null,
  isLoading: false,
};

const tablesSlice = createSlice({
  name: 'tables',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTable.pending, state => void (state.isLoading = true))
      .addCase(fetchTable.fulfilled, (state, { payload }) => {
        state.items = payload.results;
      })
      .addCase(fetchTable.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })

      .addCase(addData.pending, state => void (state.isLoading = true))
      .addCase(addData.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items];
        state.isLoading = false;
      })
      .addCase(addData.rejected, state => {
        state.isLoading = false;
      });
  },
});

export default tablesSlice.reducer;
