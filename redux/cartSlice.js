import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
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
  },
});

export const { addToCart, removeFromCart, updateCartItem, deleteCartItem } =
  cartSlice.actions;

export default cartSlice.reducer;
