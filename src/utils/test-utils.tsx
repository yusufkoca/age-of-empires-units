// here render method is overridden to be able work with specified redux state for each tests
import React, { FunctionComponent } from 'react';
import { render as rtlRender, RenderResult } from '@testing-library/react';
import { createStore, Store, AnyAction } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../store/rootReducer';
import { initialStateType } from '../store/initialState';

type renderFunc = (
  ui: React.ReactElement,
  options: { initialState?: initialStateType; store?: Store<any, AnyAction> },
) => RenderResult;

const render: renderFunc = (ui, { initialState, store = createStore(rootReducer, initialState), ...renderOptions }) => {
  const Wrapper: FunctionComponent = ({ children }: { children?: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything from actual library
export * from '@testing-library/react';
// export overridden render method
export { render };
