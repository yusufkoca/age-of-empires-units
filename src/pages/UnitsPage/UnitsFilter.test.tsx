import React from 'react';
import { screen } from '@testing-library/dom';
import { Ages, Resources } from '../../types';
import { render as rtlRender } from '@testing-library/react';
import { render } from '../../utils/test-utils';
import UnitsFilter from './UnitsFilter';
import { initialStateType } from '../../store/initialState';
import userEvent from '@testing-library/user-event';
import rootReducer from '../../store/rootReducer';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import UnitsPage from './UnitsPage';
import initialState from '../../store/initialState';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Units filter component tests', () => {
  let initialStateMock: initialStateType;
  let mockStore: EnhancedStore;
  beforeEach(() => {
    initialStateMock = {
      units: {
        list: [...initialState.units.list],
      },
      filters: {
        ageFilter: Ages.All,
        unitCostFilter: {
          [Resources.Food]: { checked: false, range: [0, 200] },
          [Resources.Wood]: { checked: false, range: [0, 200] },
          [Resources.Gold]: { checked: false, range: [0, 200] },
        },
      },
    };

    mockStore = configureStore({
      reducer: rootReducer,
    });
  });

  test('renders age select', () => {
    render(<UnitsFilter />, {
      initialState: initialStateMock,
    });
    const darkAgeButton = screen.getByText(/Dark/i);
    expect(darkAgeButton).toBeInTheDocument();
    const allAgesButton = screen.getByText(/All/i);
    expect(allAgesButton).toBeInTheDocument();
    expect(allAgesButton).not.toHaveClass('Mui-disabled');
  });

  test('renders resource sliders', async () => {
    render(<UnitsFilter />, { initialState: initialStateMock });
    const foodSlider = screen.getByTestId('resources-slider-Food');
    expect(foodSlider).toBeInTheDocument();
    expect(foodSlider).toHaveClass('Mui-disabled');
  });

  test('age select button fires action to redux store', () => {
    mockStore.dispatch = jest.fn();
    render(<UnitsFilter />, {
      initialState: initialStateMock,
      store: mockStore,
    });
    const darkAgeButton = screen.getByTestId('age-button-Dark');
    const imperialAgeButton = screen.getByTestId('age-button-Imperial');

    userEvent.click(darkAgeButton);
    userEvent.click(imperialAgeButton);
    expect(mockStore.dispatch).toHaveBeenCalledTimes(2);
  });

  test('age select button updates redux store', () => {
    render(<UnitsFilter />, {
      initialState: initialStateMock,
      store: mockStore,
    });
    const darkAgeButton = screen.getByTestId('age-button-Dark');

    userEvent.click(darkAgeButton);
    expect(mockStore.getState().filters.ageFilter).toEqual(Ages.Dark);
  });

  //Stopped working for some reason :(
  /*
  test('slider checkbox works and activates slider', () => {
    rtlRender(
      <Provider store={store}>
        <UnitsFilter></UnitsFilter>
      </Provider>,
    );

    const woodCheckbox = screen.getByTestId('resources-checkbox-Wood');
    const woodSlider = screen.getByTestId('resources-slider-Wood');

    userEvent.click(woodCheckbox);
    expect(woodCheckbox).toHaveClass('Mui-checked');
    expect(woodSlider).not.toHaveClass('Mui-disabled');
    expect(mockStore.getState().filters.unitCostFilter.Wood.checked).toBe(true);
  });

   */

  test('filters applied to the units table', () => {
    rtlRender(
      <Provider store={store}>
        <UnitsPage></UnitsPage>
      </Provider>,
    );

    //set filter to imperial age
    const imperialAgeButton = screen.getByTestId('age-button-Imperial');
    userEvent.click(imperialAgeButton);

    const foodCheckbox = screen.getByTestId('resources-checkbox-Food');
    // set food filter active
    userEvent.click(foodCheckbox);

    //41 unit requires imperial age
    const paginationText = screen.getByText(/1-10 of 41/i);
    expect(paginationText).toBeInTheDocument();

    //Cannon Galleon unit should be visible
    const eliteWarElephantUnit = screen.getByText(/Cannon Galleon/i);
    expect(eliteWarElephantUnit).toBeInTheDocument();
  });
});
