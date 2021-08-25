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
  const [genreValue, setGenreValue] = useState("")
  const [streamingValue, setStreamingValue] = useState("")
  
  const handlechange = (e) => {
    setInputValue(e.target.value)
  }

  const handleGenreChange = (e) => {
    setGenreValue(e.target.value)
  }

  const handleStreamingChange = (e) => {
    setStreamingValue(e.target.value)
  }
  
  return (
    <>
    <Router>
    <Switch>
    <Route exact path="/">
    <UserDashboard inputValue={inputValue} genreValue={genreValue} streamingValue={streamingValue} handlechange={handlechange} handleGenreChange={handleGenreChange}/>
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



