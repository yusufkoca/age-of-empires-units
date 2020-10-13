import React, { FunctionComponent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import UnitsTable from './UnitsTable';
import { RootState } from '../../store/rootReducer';
import UnitsFilter from './UnitsFilter';
import { Container } from '@material-ui/core';
import { Resources } from '../../types';

const UnitsPage: FunctionComponent = () => {
  const list = useSelector((state: RootState) => state.units.list);
  const ageFilter = useSelector((state: RootState) => state.filters.ageFilter);
  const unitCostFilter = useSelector((state: RootState) => state.filters.unitCostFilter);

  const filteredList = list.filter((unit) => {
    if (unit.age < ageFilter) return false;

    if (unit.cost) {
      for (const item in unitCostFilter) {
        if (unitCostFilter[item as keyof typeof Resources].checked) {
          if (
            unit.cost[item as keyof typeof Resources] < unitCostFilter[item as keyof typeof Resources].range[0] ||
            unit.cost[item as keyof typeof Resources] > unitCostFilter[item as keyof typeof Resources].range[1]
          ) {
            return false;
          }
        }
      }
    }

    return true;
  });

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
