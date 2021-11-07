import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  registerActive: false,
  loginActive: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    previous: (state) => {
      state.page -= 1;
    },
    setRegisterActive: (state, { payload }) => {
      if (payload === true) state.loginActive = false;
      state.registerActive = payload;
    },
    setLoginActive: (state, { payload }) => {
      if (payload === true) state.registerActive = false;
      state.loginActive = payload;
    },
  },
});

export const { next, previous, setRegisterActive, setLoginActive } =
  authSlice.actions;

export default authSlice.reducer;
