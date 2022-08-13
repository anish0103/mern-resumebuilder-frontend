import { React, useEffect, useState } from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';

import Navigation from './Components/Navigation/Navigation';
import HomePage from './Pages/HomePage/HomePage';
import LogInPage from './Pages/LogInPage/LogInPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import AddInformationPage from './Pages/AddInformationPage/AddInformationPage';
import DashBoard from './Pages/DashBoard/DashBoard';
import Loading from './Pages/Loading/Loading';
import Template1 from './Pages/ResumeTemplates/Template1/Template1';
import Template2 from './Pages/ResumeTemplates/Template2/Template2';
import { getUserById } from './store/action/action';

function App() {
  const [loading, setLoading] = useState(false)
  const isLogin = useSelector(state => state.isLogin)
  const location = useLocation();
  const dispatch = useDispatch();

  const FetchUserData = async data => {
    setLoading(true)
    await dispatch(getUserById(data))
    setLoading(false)
  }

  useEffect(() => {
    const userid = localStorage.getItem("resumebuilder")
    console.log(userid)
    if (userid !== null) {
      FetchUserData(userid)
    }
  }, [])

  if (loading) {
    return <Loading />
  }

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
          <Route path="/template" exact>
            <Template2 />
          </Route>
          <Route path="/addinformation/">
            <AddInformationPage />
          </Route>
          <Redirect to="/" />
        </Switch>}
        {isLogin && <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <DashBoard />
          </Route>
          <Route path="/addinformation/:userid">
            <AddInformationPage />
          </Route>
          <Redirect to="/" />
        </Switch>}
      </AnimatePresence>
    </>
  );
}

export default App;
