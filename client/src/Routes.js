import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './core/Home';
import Menu from './core/Menu';
import Signin from './user/Signin';
import Signup from './user/Signup';

const Routes = () => (
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/signin' exact component={Signin} />
      <Route path='/signup' exact component={Signup} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
