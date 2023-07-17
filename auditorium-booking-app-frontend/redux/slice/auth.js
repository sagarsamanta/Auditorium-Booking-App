import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        user: null,
        token: null,
    },
    reducers: {},
    extraReducers: (builder) => { }
});

export default authSlice.reducer;