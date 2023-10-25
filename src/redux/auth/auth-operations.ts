import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://technical-task-api.icapgroupgmbh.com/api';

export const login = createAsyncThunk(
    'auth/login',
    async (credentials: { username: string, password: string }, thunkAPI) => {
        try {
            const { data } = await axios.post('/login/', credentials);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
