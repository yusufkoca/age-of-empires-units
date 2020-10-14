import React from 'react';
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
    const { getByText } = render(<UnitsFilter />, {
      initialState: initialStateMock,
    });
    const darkAgeButton = getByText(/Dark/i);
    expect(darkAgeButton).toBeInTheDocument();
    const allAgesButton = getByText(/All/i);
    expect(allAgesButton).toBeInTheDocument();
    expect(allAgesButton).not.toHaveClass('Mui-disabled');
  });

  test('renders resource sliders', async () => {
    const { getByTestId } = render(<UnitsFilter />, { initialState: initialStateMock });
    const foodSlider = getByTestId('resources-slider-Food');
    expect(foodSlider).toBeInTheDocument();
    expect(foodSlider).toHaveClass('Mui-disabled');
  });

  test('age select button fires action to redux store', () => {
    mockStore.dispatch = jest.fn();
    const { getByTestId } = render(<UnitsFilter />, {
      initialState: initialStateMock,
      store: mockStore,
    });
    const darkAgeButton = getByTestId('age-button-Dark');
    const imperialAgeButton = getByTestId('age-button-Imperial');

    userEvent.click(darkAgeButton);
    userEvent.click(imperialAgeButton);
    expect(mockStore.dispatch).toHaveBeenCalledTimes(2);
  });

  test('age select button updates redux store', () => {
    const { getByTestId } = render(<UnitsFilter />, {
      initialState: initialStateMock,
      store: mockStore,
    });
    const darkAgeButton = getByTestId('age-button-Dark');

    userEvent.click(darkAgeButton);
    expect(mockStore.getState().filters.ageFilter).toEqual(Ages.Dark);
  });

  test('slider checkbox works and activates slider', () => {
    const { getByTestId } = render(<UnitsFilter />, {
      initialState: initialStateMock,
      store: mockStore,
    });

    const woodCheckbox = getByTestId('resources-checkbox-Wood');
    const woodSlider = getByTestId('resources-slider-Wood');

    userEvent.click(woodCheckbox);
    expect(woodCheckbox).toHaveClass('Mui-checked');
    expect(woodSlider).not.toHaveClass('Mui-disabled');
    expect(mockStore.getState().filters.unitCostFilter.Wood.checked).toBe(true);
  });

  test('filters applied to the units table', () => {
    const { getByText, getByTestId } = rtlRender(
      <Provider store={store}>
        <UnitsPage></UnitsPage>
      </Provider>,
    );

    //set filter to imperial age
    const imperialAgeButton = getByTestId('age-button-Imperial');
    userEvent.click(imperialAgeButton);

    const foodCheckbox = getByTestId('resources-checkbox-Food');
    // set food filter active
    userEvent.click(foodCheckbox);

    //41 unit requires imperial age
    const paginationText = getByText(/1-10 of 41/i);
    expect(paginationText).toBeInTheDocument();

    //Cannon Galleon unit should be visible
    const eliteWarElephantUnit = getByText(/Cannon Galleon/i);
    expect(eliteWarElephantUnit).toBeInTheDocument();
  });
});
