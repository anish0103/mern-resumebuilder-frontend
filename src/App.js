import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navigation from './Components/Navigation/Navigation';
import HomePage from './Pages/HomePage/HomePage';
import LogInPage from './Pages/LogInPage/LogInPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';


function App() {
  const location = useLocation();
  return (
    <>
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/login" exact>
            <LogInPage />
          </Route>
          <Route path="/signup" exact>
            <SignUpPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
