import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import RecipeList from '../pages/RecipeList';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/recipes/:recipe" component={RecipeList} />
  </Switch>
);

export default Routes;
