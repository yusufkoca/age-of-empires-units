import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  const { getByText } = render(<App />);
  const appTitle = getByText(/Age of Empires Units/i);
  expect(appTitle).toBeInTheDocument();
});
