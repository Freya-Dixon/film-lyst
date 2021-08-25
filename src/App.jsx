import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styles from './App.module.scss'
import UserDashboard from './Containers/UserDashboard'
import InputModal from './Components/InputModal'
import TVList from './Components/TVList'

function App() {

  
  const [inputValue, setInputValue] = useState("")

  const handlechange = (e) => {
    setInputValue(e.target.value)
  }

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
    <InputModal inputValue={inputValue} handlechange={handlechange}/>
    </>
  );
}

export default App;



