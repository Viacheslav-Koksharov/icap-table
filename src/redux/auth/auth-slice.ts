import { createSlice } from '@reduxjs/toolkit';
import { login } from './auth-operations';

const initialState = {
    user: { username: null, password: null },
    isLoggedIn: false,
    loading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => void (state.loading = true))
            .addCase(login.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.isLoggedIn = true;
                state.loading = false;
            })
            .addCase(login.rejected, (state) => { state.loading = false })

    },
});
export default authSlice.reducer;