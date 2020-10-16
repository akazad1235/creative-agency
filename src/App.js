import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

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
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (

 <div>
   <p>name: {loggedInUser.name}</p>
     <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          {/* <Route path="order">
            <Dashboard/>
          </Route> */}
          <PrivateRoute path="/customer/order/:id">
            <OrderForm/>
          </PrivateRoute>
          <Route path="/customer/orderlist">
            <OrderList/>
          </Route>
          <Route path="/customer/review">
            <OrderList/>
          </Route>
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
