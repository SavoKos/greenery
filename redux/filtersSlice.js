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
      const habitState = [...state.habit];
      const sizeState = [...state.size];

      let filteredPlants = initialPlants;

      if (state.tabsFilter !== 'all')
        filteredPlants = filteredPlants.filter(
          (plant) => plant.filter === state.tabsFilter
        );

      if (habitState.length > 0)
        filteredPlants = filteredPlants.filter((plant) =>
          habitState.includes(plant.habit)
        );

      if (sizeState.length > 0)
        filteredPlants = filteredPlants.filter((plant) =>
          sizeState.includes(plant.size)
        );

      if (state.sort !== 'default') {
        switch (state.sort) {
          case 'priceasc':
            filteredPlants = filteredPlants.sort((a, b) => a.price - b.price);
            break;
          case 'pricedesc':
            filteredPlants = filteredPlants
              .sort((a, b) => a.price - b.price)
              .reverse();
            break;
          case 'alphabetical':
            filteredPlants = filteredPlants.sort((a, b) =>
              a.name.localeCompare(b.name)
            );
            break;
          default:
            return filteredPlants;
        }
      }

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
