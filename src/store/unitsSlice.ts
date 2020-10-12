import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import { AppThunk } from './index';
import { Unit } from '../types';

type defaultState = {
  list: Unit[];
  filteredList: Unit[];
};

const defaultState: defaultState = {
  list: [],
  filteredList: [],
};

// Slice
const slice = createSlice({
  name: 'units',
  initialState: { ...defaultState, ...initialState.units },
  reducers: {
    setFilteredUnits: (state, action) => {
      state.filteredList = action.payload;
    },
    resetFilteredUnits: (state, action) => {
      state.filteredList = [];
    },
  },
});

export default slice.reducer;

// Actions
const { setFilteredUnits } = slice.actions;

//Thunks
export const filterUnits = (): AppThunk => async (dispatch) => {
  const filteredUnits: Unit[] = [];
  //TODO filter logic
  dispatch(setFilteredUnits(filteredUnits));
};
