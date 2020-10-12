import React from 'react';
import { useSelector } from 'react-redux';
import UnitsTable from './UnitsTable';
import { RootState } from '../../store/rootReducer';
import UnitsFilter from './UnitsFilter';

const UnitsPage = () => {
  const list = useSelector((state: RootState) => state.units.list);
  const ageFilter = useSelector((state: RootState) => state.filters.ageFilter);

  return (
    <>
      <UnitsFilter></UnitsFilter>
      <UnitsTable units={list}></UnitsTable>
    </>
  );
};

export default UnitsPage;
