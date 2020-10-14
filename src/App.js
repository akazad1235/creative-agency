import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './Component/Dashboard/Dashboard./Dashboard';
import Home from './Component/Home/Home/Home';

function App() {
  return (
   <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
   </Router>
  );
}

export default App;
