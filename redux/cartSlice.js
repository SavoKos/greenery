import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  orderCompleted: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartItems.push(payload);
    },
    removeFromCart: (state, { payload }) => {},

    updateCartItem: (state, { payload }) => {
      console.log(payload);
      const newCartItems = state.cartItems.map(
        (obj) => [payload].find((o) => o.name === obj.name) || obj
      );

      state.cartItems = newCartItems;
    },
    deleteCartItem: (state, { payload }) => {
      const newCartItems = state.cartItems.filter(
        (item) => item.name !== payload.name
      );
      state.cartItems = newCartItems;
    },
    resetCart: (state) => {
      state.cartItems = [];
    },
    updateOrderCompleted: (state, { payload }) => {
      state.orderCompleted = payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCartItem,
  deleteCartItem,
  resetCart,
  updateOrderCompleted,
} = cartSlice.actions;

export default cartSlice.reducer;
