import React, { FunctionComponent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UnitDetails from './UnitDetails';
import { Container, Typography } from '@material-ui/core';
import { RootState } from '../../store/rootReducer';
import Box from '@material-ui/core/Box';

const UnitDetailsPage: FunctionComponent = () => {
  const { id } = useParams();
  const allUnits = useSelector((state: RootState) => state.units.list);
  const unit = allUnits.find((unit) => unit.id.toString() === id);
  useEffect(() => {
    document.title = unit?.name || 'Unit Details';
  }, [unit]);
  return (
    <Container maxWidth={'md'}>
      <Box display="flex" width={'100%'} alignItems="center" justifyContent="center">
        <Typography color="inherit" variant={'h4'}>
          Unit Details Page
        </Typography>
      </Box>
      {unit ? <UnitDetails unit={unit}></UnitDetails> : <Typography variant="h4">Unit Not Found!</Typography>}
    </Container>
  );
};

export default UnitDetailsPage;
