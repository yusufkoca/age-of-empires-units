import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import Slider from '@material-ui/core/Slider';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Ages, Cost, Resources, UnitCostFilter } from '../../types';
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
    slider: {
      width: 'auto',
      flexGrow: 1,
    },
    costFilter: {
      width: '100%',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  }),
);

type UnitsFilterProps = {
  unitCostFilter: UnitCostFilter;
};

const UnitsFilter = ({ unitCostFilter }: UnitsFilterProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [slidersData, setSlidersData] = useState<UnitCostFilter>(unitCostFilter);
  const ageFilter = useSelector((state: RootState) => state.filters.ageFilter);

  const handleAgeClick = (age: Ages) => {
    dispatch(setAgeFilter(age));
  };

  const handleCheckboxClick = (key: Resources) => {
    const newSlidersData = {
      ...slidersData,
      [key]: { ...slidersData[key], checked: !slidersData[key].checked },
    };
    setSlidersData(newSlidersData);
    dispatch(setUnitCostFilter(newSlidersData));
  };

  const handleSlidersDataChange = (key: Resources, value: [number, number]) => {
    setSlidersData({
      ...slidersData,
      [key]: { ...slidersData[key], range: value },
    });
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
      {slidersData &&
        Object.entries(slidersData).map(([key, value]: [string, Cost]) => (
          <FormGroup row key={key} className={classes.costFilter}>
            <FormControlLabel
              key={key}
              control={
                <Checkbox
                  checked={value.checked}
                  onChange={() => {
                    handleCheckboxClick(Resources[key as keyof typeof Resources]);
                  }}
                  name={key}
                  color="primary"
                />
              }
              label={key}
            />
            <Slider
              min={0}
              max={201}
              disabled={!value.checked}
              value={value.range}
              onChange={(event, newValue: number[] | number) => {
                let rangeValue: [number, number];
                if (Array.isArray(newValue)) {
                  rangeValue = [newValue[0], newValue[1]];
                } else {
                  rangeValue = [newValue, newValue];
                }

                handleSlidersDataChange(Resources[key as keyof typeof Resources], rangeValue);
              }}
              onChangeCommitted={() => {
                dispatch(setUnitCostFilter(slidersData));
              }}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              className={classes.slider}
            />
          </FormGroup>
        ))}
    </div>
  );
};

export default UnitsFilter;
