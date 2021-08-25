import logo from './logo.svg';
import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styles from './App.module.scss'
import UserDashboard from './Containers/UserDashboard'
import TVList from './Components/TVList'

function App() {
  return (
    <>
    <Router>
    <Switch>
    <Route exact path="/">
    <UserDashboard />
    </Route>
    <Route path="/tvlyst">
      <TVList/>
    </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;



