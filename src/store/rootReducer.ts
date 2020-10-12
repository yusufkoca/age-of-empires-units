import { combineReducers } from '@reduxjs/toolkit';

import unitsSlice from './unitsSlice';

const rootReducer = combineReducers({
  units: unitsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
