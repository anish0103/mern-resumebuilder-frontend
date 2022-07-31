import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Navigation from './Components/Navigation/Navigation';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
