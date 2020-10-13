import React, { FunctionComponent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import UnitsTable from './UnitsTable';
import { RootState } from '../../store/rootReducer';
import UnitsFilter from './UnitsFilter';
import { Container, Typography } from '@material-ui/core';
import useFilteredUnits from '../../hooks/useFilteredUnits';
import Box from '@material-ui/core/Box';

const UnitsPage: FunctionComponent = () => {
  const unitCostFilter = useSelector((state: RootState) => state.filters.unitCostFilter);
  const filteredList = useFilteredUnits();

  useEffect(() => {
    document.title = 'Unit List';
  }, []);

  return (
    <Container maxWidth={'md'}>
      <Box display="flex" width={'100%'} alignItems="center" justifyContent="center">
        <Typography color="inherit" variant={'h4'}>
          Units Page
        </Typography>
      </Box>
      <UnitsFilter unitCostFilter={unitCostFilter} />
      <UnitsTable units={filteredList} />
    </Container>
  );
};

export default UnitsPage;
