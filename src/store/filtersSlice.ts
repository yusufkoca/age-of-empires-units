import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import { AppThunk } from './index';
import { Ages, UnitCost, UnitCostFilter } from '../types';

type defaultStateType = {
  ageFilter: Ages;
  unitCostFilter: UnitCostFilter;
};

const defaultState: defaultStateType = {
  ageFilter: Ages.All,
  unitCostFilter: {
    Food: { min: 0, max: 200 },
    Wood: { min: 0, max: 200 },
    Gold: { min: 0, max: 200 },
  },
};

// Slice
const slice = createSlice({
  name: 'filters',
  initialState: { ...defaultState, ...initialState.filters },
  reducers: {
    setAge: (state, action) => {
      state.ageFilter = action.payload;
    },
    setUnitCost: (state, action) => {
      state.unitCostFilter = action.payload;
    },
  },
});

export default slice.reducer;

// Actions
const { setAge, setUnitCost } = slice.actions;

//Thunks
export const setAgeFilter = (age: Ages): AppThunk => async (dispatch) => {
  dispatch(setAge(age));
};

export const setUnitCostFilter = (unitCost: UnitCostFilter): AppThunk => async (dispatch) => {
  dispatch(setUnitCost(unitCost));
};
