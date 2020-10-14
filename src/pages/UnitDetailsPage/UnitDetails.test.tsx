/* eslint-disable @typescript-eslint/camelcase */
//camelcase rule disabled here because I didn't want to change original json data
import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import UnitDetails from './UnitDetails';
import { Unit } from '../../types';

const unit: Unit = {
  id: 2,
  name: 'Crossbowman',
  description: 'Upgraded archer',
  expansion: 'Age of Kings',
  age: 4,
  cost: {
    Food: 0,
    Wood: 25,
    Gold: 45,
  },
  build_time: 27,
  reload_time: 2,
  attack_delay: 0.35,
  movement_rate: 0.96,
  line_of_sight: 7,
  hit_points: 35,
  range: 5,
  attack: 5,
  armor: '0/0',
  attack_bonus: ['+3 spearmen'],
  accuracy: '85%',
};

test('renders unit details', () => {
  render(<UnitDetails unit={unit} />);
  expect(screen.getByText(/Name: Crossbowman/i)).toBeInTheDocument();
  expect(screen.getByText(/Description: Upgraded archer/i)).toBeInTheDocument();
});
