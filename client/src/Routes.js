import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import AdminRoute from './auth/AdminRoutes';
import PrivateRoute from './auth/PrivateRoute';
import Cart from './core/Cart';
import Home from './core/Home';
import Menu from './core/Menu';
import Product from './core/Product';
import Shop from './core/Shop';
import AdminDashboard from './user/AdminDashboard';
import Signin from './user/Signin';
import Signup from './user/Signup';
import Dashboard from './user/UserDashboard';

const Routes = () => (
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/shop' exact component={Shop} />
      <Route path='/signin' exact component={Signin} />
      <Route path='/signup' exact component={Signup} />
      <PrivateRoute exact path='/user/dashboard' component={Dashboard} />
      <AdminRoute exact path='/admin/dashboard' component={AdminDashboard} />
      <AdminRoute exact path='/create/category' component={AddCategory} />
      <AdminRoute exact path='/create/product' component={AddProduct} />
      <Route path='/product/:productId' exact component={Product} />
      <Route path='/cart' exact component={Cart} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
