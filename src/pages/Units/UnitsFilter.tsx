import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Ages, Cost } from '../../types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { setUnitCostFilter, setAgeFilter } from '../../store/filtersSlice';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

const UnitsFilter = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const ageFilter = useSelector((state: RootState) => state.filters.ageFilter);
  const unitCostFilter = useSelector((state: RootState) => state.filters.unitCostFilter);
  console.log(Ages);
  const handleAgeClick = (age: Ages) => {
    dispatch(setAgeFilter(age));
  };

  const handleCheckboxClick = (key: string) => {
    dispatch(
      setUnitCostFilter({
        ...unitCostFilter,
        [key]: { ...unitCostFilter[key], checked: !unitCostFilter[key].checked },
      }),
    );
  };
  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" size="large" aria-label="outlined primary button group">
        {Object.keys(Ages).map((key) => {
          if (isNaN(Number(key))) {
            return (
              <Button
                key={key}
                variant={Ages[key as keyof typeof Ages] === ageFilter ? 'contained' : 'outlined'}
                onClick={() => {
                  handleAgeClick(Ages[key as keyof typeof Ages]);
                }}
              >
                {key}
              </Button>
            );
          } else {
            return null;
          }
        })}
      </ButtonGroup>
      {Object.entries(unitCostFilter).map(([key, value]: [string, Cost]) => (
        <FormControlLabel
          key={key}
          control={
            <Checkbox
              checked={value.checked}
              onChange={() => {
                handleCheckboxClick(key);
              }}
              name={key}
              color="primary"
            />
          }
          label={key}
        />
      ))}
    </div>
  );
};

export default UnitsFilter;
