import React from 'react';
import { useSelector } from 'react-redux';
import UnitsTable from './UnitsTable';
import { RootState } from '../../store/rootReducer';

const UnitsPage = () => {
  const unitsList = useSelector((state: RootState) => state.units.list);
  return <UnitsTable units={unitsList}></UnitsTable>;
};

export default UnitsPage;
