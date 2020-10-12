import { combineReducers } from '@reduxjs/toolkit';

import unitsSlice from './unitsSlice';
import filtersSlice from './filtersSlice';

const rootReducer = combineReducers({
  units: unitsSlice,
  filters: filtersSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
