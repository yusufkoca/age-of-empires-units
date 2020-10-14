import React from 'react';
import { render } from '@testing-library/react';
import UnitDetailsPage from './UnitDetailsPage';
import { Route, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';

test('renders unit details page', () => {
  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['units/1']}>
        <Route path="units/:id">
          <UnitDetailsPage></UnitDetailsPage>
        </Route>
      </MemoryRouter>
    </Provider>,
  );
  const pageTitle = getByText(/Unit Details Page/i);
  expect(pageTitle).toBeInTheDocument();
});
