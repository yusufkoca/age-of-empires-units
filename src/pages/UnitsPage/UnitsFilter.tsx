import React, { FunctionComponent, useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import Slider from '@material-ui/core/Slider';
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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

const UnitsFilter: FunctionComponent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const onMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const dispatch = useDispatch();
  const unitCostFilter = useSelector((state: RootState) => state.filters.unitCostFilter);
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

  const handleSlidersDataChange = (key: Resources, value: number[] | number) => {
    setSlidersData({
      ...slidersData,
      [key]: { ...slidersData[key], range: value },
    });
  };

  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" size={onMobile ? 'small' : 'large'} aria-label="outlined primary button group">
        {Object.keys(Ages).map((key) => {
          if (isNaN(Number(key))) {
            return (
              <Button
                key={key}
                variant={Ages[key as keyof typeof Ages] === ageFilter ? 'contained' : 'outlined'}
                onClick={() => {
                  handleAgeClick(Ages[key as keyof typeof Ages]);
                }}
                data-testid={'age-button-' + key}
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
                  data-testid={'resources-checkbox-' + key}
                />
              }
              label={key}
            />
            <Slider
              min={0}
              max={200}
              disabled={!value.checked}
              value={[value.range[0], value.range[1]]}
              onChange={(event, newValue: number[] | number) => {
                handleSlidersDataChange(Resources[key as keyof typeof Resources], newValue);
              }}
              onChangeCommitted={() => {
                dispatch(setUnitCostFilter(slidersData));
              }}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              className={classes.slider}
              data-testid={'resources-slider-' + key}
            />
          </FormGroup>
        ))}
    </div>
  );
};

export default UnitsFilter;
