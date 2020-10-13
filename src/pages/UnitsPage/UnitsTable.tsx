import React from 'react';
import { useHistory } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Unit, Ages } from '../../types';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      width: '100%',
    },
    tableRow: {
      cursor: 'pointer',
    },
    tableCell: {
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(1, 1, 1, 2),
      },
    },
  }),
);

type UnitsTableProps = {
  units: Unit[];
};

export default function UnitsTable({ units }: UnitsTableProps) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>Id</TableCell>
            <TableCell className={classes.tableCell} align="center">
              Name
            </TableCell>
            <TableCell className={classes.tableCell} align="center">
              Age
            </TableCell>
            <TableCell className={classes.tableCell} align="center">
              Costs
            </TableCell>
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
              <TableCell className={classes.tableCell} component="th" scope="row">
                {unit.id}
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                {unit.name}
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                {Ages[unit.age]}
              </TableCell>
              <TableCell
                className={classes.tableCell}
                align="center"
              >{`Food: ${unit?.cost?.Food}, Wood: ${unit?.cost?.Wood}, Gold: ${unit?.cost?.Gold}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
