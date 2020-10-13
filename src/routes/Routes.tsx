import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import UnitsPage from '../pages/UnitsPage';
import UnitDetailsPage from '../pages/UnitDetailsPage';

const Routes: FunctionComponent = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/units/:id" exact>
        <UnitDetailsPage />
      </Route>
      <Route path="/units" exact>
        <UnitsPage />
      </Route>
      <Route path="*">
        <div>Not Found</div>
      </Route>
    </Switch>
  );
};
export default Routes;
