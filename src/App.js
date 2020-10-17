import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddService from './Component/Admin/AddService/AddService';
import MakeAdmin from './Component/Admin/MakeAdmin/MakeAdmin';
import Orders from './Component/Admin/Orders/Orders';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import OrderForm from './Component/Dashboard/OrderForm/OrderForm';
import OrderList from './Component/Dashboard/OrderList/OrderList';
import Review from './Component/Dashboard/Review/Review';
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (

 <div>
     <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <PrivateRoute path="/customer/order/:_id">
            <OrderForm/>
          </PrivateRoute>
          <Route path="/customer/orderlist">
            <OrderList/>
          </Route>
          <PrivateRoute path="/customer/review/:id">
            <Review/>
          </PrivateRoute>
          <PrivateRoute path="/admin/ordersList/:id">
            <Orders/>
          </PrivateRoute>
          <PrivateRoute path="/admin/addService/:id">
            <AddService/>
          </PrivateRoute>
          <PrivateRoute path="/admin/AddAdmin/:id">
            <MakeAdmin/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
   </Router>

   </UserContext.Provider>
 </div>
  );
}

export default App;
