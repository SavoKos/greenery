import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderDetails: null,
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    updateOrderDetails: (state, { payload }) => {
      state.orderDetails = payload;
    },
  },
});

export const { updateOrderDetails } = orderSlice.actions;

export default orderSlice.reducer;
