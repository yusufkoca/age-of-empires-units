import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import UnitsTable from './UnitsTable';
import { RootState } from '../../store/rootReducer';
import UnitsFilter from './UnitsFilter';
import { Container } from '@material-ui/core';

const UnitsPage: FunctionComponent = () => {
  const list = useSelector((state: RootState) => state.units.list);
  const ageFilter = useSelector((state: RootState) => state.filters.ageFilter);
  const unitCostFilter = useSelector((state: RootState) => state.filters.unitCostFilter);

  const filteredList = list.filter((unit) => {
    if (unit.age < ageFilter) return false;

    if (unit.cost) {
      for (const item in unitCostFilter) {
        if (unitCostFilter[item].checked) {
          if (unit.cost[item] < unitCostFilter[item].range[0] || unit.cost[item] > unitCostFilter[item].range[1]) {
            return false;
          }
        }
      }
    }

    return true;
  });

  return (
    <Container maxWidth={'md'}>
      <UnitsFilter unitCostFilter={unitCostFilter} />
      <UnitsTable units={filteredList} />
    </Container>
  );
};

export default UnitsPage;
