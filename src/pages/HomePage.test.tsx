import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import HomePage from './HomePage';

test('renders home page', () => {
  render(<HomePage />);
  const pageTitle = screen.getByText(/Home Page/i);
  expect(pageTitle).toBeInTheDocument();

  const imageAltText = screen.getByAltText(/Welcome to Age of Empires Units/i);
  expect(imageAltText).toBeInTheDocument();
});

test('changes document title', async () => {
  render(<HomePage />);
  await waitFor(() => expect(document.title).toEqual('AeO Home'));
});
