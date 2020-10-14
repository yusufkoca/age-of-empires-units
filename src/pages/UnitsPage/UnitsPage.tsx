import React, { FunctionComponent, useEffect } from 'react';
import UnitsTable from './UnitsTable';
import UnitsFilter from './UnitsFilter';
import { Container, Typography } from '@material-ui/core';
import useFilteredUnits from '../../hooks/useFilteredUnits';
import Box from '@material-ui/core/Box';

const UnitsPage: FunctionComponent = () => {
  const filteredList = useFilteredUnits();

  useEffect(() => {
    document.title = 'Units List';
  }, []);

  return (
    <Container maxWidth={'md'}>
      <Box display="flex" width={'100%'} alignItems="center" justifyContent="center">
        <Typography color="inherit" variant={'h4'}>
          Units Page
        </Typography>
      </Box>
      <UnitsFilter />
      <UnitsTable units={filteredList} />
    </Container>
  );
};

export default UnitsPage;
