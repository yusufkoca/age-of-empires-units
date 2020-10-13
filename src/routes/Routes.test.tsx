import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';

import Routes from './Routes';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import store from '../store';

test('full app rendering/navigating', () => {
  const history = createMemoryHistory();
  render(
    <Provider store={store}>
      <Router history={history}>
        <Layout>
          <Routes></Routes>
        </Layout>
      </Router>
    </Provider>,
  );

  // home page rendered
  expect(screen.getByText(/Home Page/i)).toBeInTheDocument();

  const leftClick = { button: 0 };
  // click to units page nav link
  userEvent.click(screen.getByTestId('units-page-link'), leftClick);

  // units page rendered
  expect(screen.getByText(/Units Page/i)).toBeInTheDocument();

  // click to one of the units from the list
  userEvent.click(screen.getByText('Archer'), leftClick);
  // unit details page rendered
  expect(screen.getByText(/Unit Details Page/i)).toBeInTheDocument();
});

test('landing on a bad page', () => {
  const history = createMemoryHistory();
  history.push('/route/66'); // a route that does not exist
  render(
    <Router history={history}>
      <Layout>
        <Routes />
      </Layout>
    </Router>,
  );

  // page not found text rendered
  expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
});
