import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tabsFilter: 'all',
  sort: 'default',
  habit: [],
  size: [],
  initialPlants: [],
  plants: [],
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updatePlants: (state) => {
      const initialPlants = [...state.initialPlants];
      let filteredPlants = initialPlants;

      console.log('sizeee');

      if (state.tabsFilter !== 'all')
        filteredPlants = filteredPlants.filter(
          (plant) => plant.filter === state.tabsFilter
        );

      if ([...state.habit].length > 0)
        filteredPlants = filteredPlants.filter((plant) =>
          [...state.habit].includes(plant.habit)
        );

      if ([...state.size].length > 0)
        filteredPlants = filteredPlants.filter((plant) =>
          [...state.size].includes(plant.size)
        );

      console.log(filteredPlants);

      state.plants =
        filteredPlants.length === 0
          ? 'We could not find any plant. Try another filters'
          : filteredPlants || initialPlants;
    },
    updateTabsFilter: (state, { payload }) => {
      state.tabsFilter = payload;
    },
    updateHabit: (state, { payload }) => {
      state.habit = payload;
    },
    updateSort: (state, { payload }) => {
      state.sort = payload;
    },
    updateSize: (state, { payload }) => {
      state.size = payload;
    },
    updateInitialPlants: (state, { payload }) => {
      state.initialPlants = payload;
    },
  },
});

export const {
  updateTabsFilter,
  updateHabit,
  updateSort,
  updateSize,
  updatePlants,
  updateInitialPlants,
} = filtersSlice.actions;

export default filtersSlice.reducer;
