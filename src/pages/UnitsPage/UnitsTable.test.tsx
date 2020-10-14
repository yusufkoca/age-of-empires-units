/* eslint-disable @typescript-eslint/camelcase */
//camelcase rule disabled here because I didn't want to change original json data
import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
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
        age: 5,
        cost: {
          Food: 0,
          Wood: 40,
          Gold: 70,
        },
        build_time: 27,
        reload_time: 2,
        attack_delay: 1,
        movement_rate: 1.4,
        line_of_sight: 6,
        hit_points: 60,
        range: 4,
        attack: 7,
        armor: '1/0',
        attack_bonus: ['+2 spearmen'],
        accuracy: '50%',
      },
      {
        id: 6,
        name: 'Hand Cannoneer',
        description: 'Powerful close attack; inaccurate at range. Attack bonus against spearman +11 in total',
        expansion: 'Age of Kings',
        age: 5,
        cost: {
          Food: 45,
          Wood: 0,
          Gold: 50,
        },
        build_time: 34,
        reload_time: 3.45,
        attack_delay: 0.45,
        movement_rate: 0.96,
        line_of_sight: 9,
        hit_points: 35,
        range: 7,
        attack: 17,
        armor: '1/0',
        attack_bonus: ['1 spearmen', '+10 infantry', '+2 rams'],
        accuracy: '65%',
      },
    ];

    render(<UnitsTable units={mockUnits} />);
    const tableCell = screen.getByText(/Heavy Cavalry Archer/i);
    expect(tableCell).toBeInTheDocument();

    const paginationText = screen.getByText(/1-2 of 2/i);
    expect(paginationText).toBeInTheDocument();
  });

  test('pagination works', () => {
    render(<UnitsTable units={initialState.units.list} />);
    const nextPageButton = screen.getByTitle('Next page');
    const prevPageButton = screen.getByTitle('Previous page');
    userEvent.click(nextPageButton);

    const tableCell = screen.getByText(/Elite Eagle Warrior/i);
    expect(tableCell).toBeInTheDocument();

    userEvent.click(prevPageButton);
    expect(screen.getByText(/Elite Skirmisher/i)).toBeInTheDocument();
  });
});
