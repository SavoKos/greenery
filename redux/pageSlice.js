import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    next: (state) => {
      state.page += 1;
    },
    previous: (state) => {
      state.page -= 1;
    },
    goToSpecificPage: (state, { payload }) => {
      state.page = payload;
    },
  },
});

export const { next, previous, goToSpecificPage } = pageSlice.actions;

export default pageSlice.reducer;
