import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import cartReducer from './cartSlice';
import filtersReducer from './filtersSlice';
import orderReducer from './orderSlice';
import pageReducer from './pageSlice';

export const store = configureStore({
  reducer: {
    page: pageReducer,
    filters: filtersReducer,
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
