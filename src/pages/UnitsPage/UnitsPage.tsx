import React, { FunctionComponent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import UnitsTable from './UnitsTable';
import { RootState } from '../../store/rootReducer';
import UnitsFilter from './UnitsFilter';
import { Container } from '@material-ui/core';
import useFilteredUnits from '../../hooks/useFilteredUnits';

const UnitsPage: FunctionComponent = () => {
  const unitCostFilter = useSelector((state: RootState) => state.filters.unitCostFilter);
  const filteredList = useFilteredUnits();

  useEffect(() => {
    document.title = 'Unit List';
  }, []);

  return (
    <Container maxWidth={'md'}>
      <UnitsFilter unitCostFilter={unitCostFilter} />
      <UnitsTable units={filteredList} />
    </Container>
  );
};

export default UnitsPage;
