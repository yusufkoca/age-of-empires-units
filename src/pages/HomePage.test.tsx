import React from 'react';
import { render, wait } from '@testing-library/react';
import HomePage from './HomePage';

test('renders home page', () => {
  const { getByText, getByAltText } = render(<HomePage />);
  const pageTitle = getByText(/Home Page/i);
  expect(pageTitle).toBeInTheDocument();

  const imageAltText = getByAltText(/Welcome to Age of Empires Units/i);
  expect(imageAltText).toBeInTheDocument();
});

test('changes document title', async () => {
  render(<HomePage />);
  await wait(() => expect(document.title).toEqual('AeO Home'));
});
