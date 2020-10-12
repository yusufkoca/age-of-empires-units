import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import UnitsPage from '../pages/Units';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage></HomePage>
      </Route>
      <Route path="/units" exact>
        <UnitsPage></UnitsPage>
      </Route>
      <Route path="*">
        <div>Not Found</div>
      </Route>
    </Switch>
  );
}
