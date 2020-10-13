import units from './unitsSlice';
import { Ages, Unit } from '../types';

const mockUnits = [
  {
    id: 5,
    name: 'Heavy Cavalry Archer',
    description: 'Upgraded Cavalry Archer',
    expansion: 'Age of Kings',
    age: Ages.Imperial,
    cost: {
      Food: 0,
      Wood: 40,
      Gold: 70,
    },
  },
  {
    id: 6,
    name: 'Hand Cannoneer',
    description: 'Powerful close attack; inaccurate at range. Attack bonus against spearman +11 in total',
    expansion: 'Age of Kings',
    age: Ages.Imperial,
    cost: {
      Food: 45,
      Wood: 0,
      Gold: 50,
    },
  },
];

test('handles initial state', () => {
  expect(units(undefined, { type: '' }).list).not.toEqual([]);
});

test('handles units/setUnits', () => {
  expect(
    units(
      { list: [] },
      {
        type: 'units/setUnits',
        payload: mockUnits,
      },
    ),
  ).toEqual({ list: mockUnits });
});
