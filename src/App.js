import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';

import Navigation from './Components/Navigation/Navigation';
import HomePage from './Pages/HomePage/HomePage';
import LogInPage from './Pages/LogInPage/LogInPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import AddInformationPage from './Pages/AddInformationPage/AddInformationPage';
import DashBoard from './Pages/DashBoard/DashBoard';

function App() {
  const location = useLocation();
  const isLogin = useSelector(state => state.isLogin)

  return (
    <>
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        {!isLogin && <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/login" exact>
            <LogInPage />
          </Route>
          <Route path="/signup" exact>
            <SignUpPage />
          </Route>
          <Route path="/addinformation" exact>
            <AddInformationPage />
          </Route>
          <Redirect to="/" />
        </Switch>}
        {isLogin && <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <DashBoard />
          </Route>
          <Redirect to="/" />
        </Switch>}
      </AnimatePresence>
    </>
  );
}

export default App;
