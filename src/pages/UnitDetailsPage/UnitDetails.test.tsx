import React from 'react';
import jsonData from '../../assets/age-of-empires-units.json';
import { render } from '@testing-library/react';
import UnitDetails from './UnitDetails';
import Unit from '../../types';

const unit: Unit = jsonData.units[1];

test('renders unit details', () => {
  const { getByText } = render(<UnitDetails unit={unit} />);
  expect(getByText(/Name: Crossbowman/i)).toBeInTheDocument();
  expect(getByText(/Description: Upgraded archer/i)).toBeInTheDocument();
});
