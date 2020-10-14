import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import App from './App';

test('renders app', () => {
  render(<App />);
  const appTitle = screen.getByText(/Age of Empires Units/i);
  expect(appTitle).toBeInTheDocument();
});
