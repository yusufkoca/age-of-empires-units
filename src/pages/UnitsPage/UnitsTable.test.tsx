import React from 'react';
import { Ages } from '../../types';
import { render } from '@testing-library/react';
import initialState from '../../store/initialState';
import UnitsTable from './UnitsTable';
import userEvent from '@testing-library/user-event';

describe('Units Table Component tests', () => {
  test('renders units table', () => {
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

    const { getByText } = render(<UnitsTable units={mockUnits} />);
    const tableCell = getByText(/Heavy Cavalry Archer/i);
    expect(tableCell).toBeInTheDocument();

    const paginationText = getByText(/1-2 of 2/i);
    expect(paginationText).toBeInTheDocument();
  });

  test('pagination works', () => {
    const { getByText, getByTitle } = render(<UnitsTable units={initialState.units.list} />);
    const nextPageButton = getByTitle('Next page');
    const prevPageButton = getByTitle('Previous page');
    userEvent.click(nextPageButton);

    const tableCell = getByText(/Elite Eagle Warrior/i);
    expect(tableCell).toBeInTheDocument();

    userEvent.click(prevPageButton);
    expect(getByText(/Elite Skirmisher/i)).toBeInTheDocument();
  });
});
