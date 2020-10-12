import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <div>MainPage</div>
      </Route>
      <Route path="*">
        <div>Not Found</div>
      </Route>
    </Switch>
  );
}
