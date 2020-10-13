import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Unit, Ages } from '../../types';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableRow: {
    cursor: 'pointer',
  },
});

type UnitsTableProps = {
  units: Unit[];
};

export default function UnitsTable({ units }: UnitsTableProps) {
  const classes = useStyles();
  let history = useHistory();

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
            <TableRow
              key={unit.id}
              onClick={() => {
                history.push('/units/' + unit.id);
              }}
              className={classes.tableRow}
            >
              <TableCell component="th" scope="row">
                {unit.id}
              </TableCell>
              <TableCell align="center">{unit.name}</TableCell>
              <TableCell align="center">{Ages[unit.age]}</TableCell>
              <TableCell align="center">{`Food: ${unit?.cost?.Food}, Wood: ${unit?.cost?.Wood}, Gold: ${unit?.cost?.Gold}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
