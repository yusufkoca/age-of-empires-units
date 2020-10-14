import React from 'react';
import { screen } from '@testing-library/dom';
import { render, waitFor } from '../../utils/test-utils';
import UnitsPage from './UnitsPage';

test('renders units page', () => {
  render(<UnitsPage />, {});
  const pageTitle = screen.getByText(/Units Page/i);
  expect(pageTitle).toBeInTheDocument();
});

test('changes document title to Units Page', async () => {
  render(<UnitsPage />, {});
  await waitFor(() => expect(document.title).toEqual('Units List'));
});
