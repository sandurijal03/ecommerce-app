import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminRoute from './auth/AdminRoutes';
import PrivateRoute from './auth/PrivateRoute';
import Home from './core/Home';
import Menu from './core/Menu';
import AdminDashboard from './user/AdminDashboard';
import Signin from './user/Signin';
import Signup from './user/Signup';
import Dashboard from './user/UserDashboard';

const Routes = () => (
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/signin' exact component={Signin} />
      <Route path='/signup' exact component={Signup} />
      <PrivateRoute exact path='/user/dashboard' component={Dashboard} />
      <AdminRoute exact path='/admin/dashboard' component={AdminDashboard} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
