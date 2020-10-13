import filters from './filtersSlice';
import { Ages, Resources, Unit } from '../types';

test('handles initial state', () => {
  expect(filters(undefined, { type: '' })).toEqual({
    ageFilter: Ages.All,
    unitCostFilter: {
      [Resources.Food]: { checked: false, range: [0, 200] },
      [Resources.Wood]: { checked: false, range: [0, 200] },
      [Resources.Gold]: { checked: false, range: [0, 200] },
    },
  });
});

test('handles filters/setAge', () => {
  expect(
    filters(
      {
        ageFilter: Ages.All,
        unitCostFilter: {
          [Resources.Food]: { checked: false, range: [0, 200] },
          [Resources.Wood]: { checked: false, range: [0, 200] },
          [Resources.Gold]: { checked: false, range: [0, 200] },
        },
      },
      {
        type: 'filters/setAge',
        payload: Ages.Imperial,
      },
    ),
  ).toEqual({
    ageFilter: Ages.Imperial,
    unitCostFilter: {
      [Resources.Food]: { checked: false, range: [0, 200] },
      [Resources.Wood]: { checked: false, range: [0, 200] },
      [Resources.Gold]: { checked: false, range: [0, 200] },
    },
  });
});

test('handles filters/setUnitCost', () => {
  expect(
    filters(
      {
        ageFilter: Ages.All,
        unitCostFilter: {
          [Resources.Food]: { checked: false, range: [0, 200] },
          [Resources.Wood]: { checked: false, range: [0, 200] },
          [Resources.Gold]: { checked: false, range: [0, 200] },
        },
      },
      {
        type: 'filters/setUnitCost',
        payload: {
          [Resources.Food]: { checked: true, range: [25, 25] },
          [Resources.Wood]: { checked: true, range: [10, 50] },
          [Resources.Gold]: { checked: false, range: [0, 200] },
        },
      },
    ),
  ).toEqual({
    ageFilter: Ages.All,
    unitCostFilter: {
      [Resources.Food]: { checked: true, range: [25, 25] },
      [Resources.Wood]: { checked: true, range: [10, 50] },
      [Resources.Gold]: { checked: false, range: [0, 200] },
    },
  });
});
