import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import OrderForm from './Component/Dashboard/OrderForm/OrderForm';
import OrderList from './Component/Dashboard/OrderList/OrderList';
import Home from './Component/Home/Home/Home';

function App() {
  return (
   <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          {/* <Route path="order">
            <Dashboard/>
          </Route> */}
          <Route path="/customer/order">
            <OrderForm/>
          </Route>
          <Route path="/customer/orderlist">
            <OrderList/>
          </Route>
          <Route path="/customer/review">
            <OrderList/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
   </Router>
  );
}

export default App;
