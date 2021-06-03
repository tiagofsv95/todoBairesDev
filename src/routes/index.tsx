import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Todo from '../pages/Todo';
import Done from '../pages/Done';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Todo} />
    <Route path="/done" component={Done} />
  </Switch>
);

export default Routes;
