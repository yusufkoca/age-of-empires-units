import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import { AppThunk } from './index';
import { Ages, Resources, UnitCostFilter } from '../types';

type defaultStateType = {
  ageFilter: Ages;
  unitCostFilter: UnitCostFilter;
};

const defaultState: defaultStateType = {
  ageFilter: Ages.All,
  unitCostFilter: {
    [Resources.Food]: { checked: false, range: [0, 200] },
    [Resources.Wood]: { checked: false, range: [0, 200] },
    [Resources.Gold]: { checked: false, range: [0, 200] },
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
