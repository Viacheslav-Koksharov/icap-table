import { configureStore } from '@reduxjs/toolkit';
import {useDispatch, 
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import tableSliceReducer from './tables/tables-slice';
import authSliceReducer from './auth/auth-slice';

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    table: tableSliceReducer,
  },
});

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
