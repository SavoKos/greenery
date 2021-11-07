import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import filtersReducer from './filtersSlice';
import pageReducer from './pageSlice';

export const store = configureStore({
  reducer: { page: pageReducer, filters: filtersReducer, auth: authReducer },
});
