import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Unit } from '../../types';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

type UnitsTableProps = {
  units: Unit[];
};

export default function UnitsTable({ units }: UnitsTableProps) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Age</TableCell>
            <TableCell align="center">Costs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {units.map((unit) => (
            <TableRow key={unit.id}>
              <TableCell component="th" scope="row">
                {unit.id}
              </TableCell>
              <TableCell align="right">{unit.name}</TableCell>
              <TableCell align="right">{unit.age}</TableCell>
              <TableCell align="right">{JSON.stringify(unit.cost)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
