import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filtersSlice';
import pageReducer from './pageSlice';

export const store = configureStore({
  reducer: { page: pageReducer, filters: filtersReducer },
});
