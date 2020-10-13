import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import { AppThunk } from './index';
import { Unit } from '../types';

type defaultState = {
  list: Unit[];
};

const defaultState: defaultState = {
  list: [],
};

// Slice
const slice = createSlice({
  name: 'units',
  initialState: { ...defaultState, ...initialState.units },
  reducers: {
    setUnits: (state, action) => {
      state.list = action.payload;
    },
  },
});

export default slice.reducer;

// Actions
const { setUnits } = slice.actions;

//Thunks
export const fetchUnits = (): AppThunk => async (dispatch) => {
  //If units list is provided by an API, this func can be used.
  try {
    const res = await fetch(`/api/units/`);
    dispatch(setUnits(res));
  } catch (e) {
    return console.error(e.message);
  }
};
