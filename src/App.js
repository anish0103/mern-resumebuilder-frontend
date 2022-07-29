import React from 'react'
// import { Player } from '@lottiefiles/react-lottie-player';
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
    // <div className="App">
    //   {/* <Player
    //     autoplay
    //     loop
    //     speed={1.5}
    //     src="https://assets2.lottiefiles.com/packages/lf20_4DLPlW.json"
    //     style={{ height: '500px', width: '500px' }}
    //   ></Player> */}
    //   Resume Builder
    // </div>
  );
}

export default App;
