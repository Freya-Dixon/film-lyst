
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styles from './App.module.scss'
import UserDashboard from './Containers/UserDashboard'
import TVList from './Components/TVList'
import FilmList from './Components/FilmList'

function App() {

  
  const [inputValue, setInputValue] = useState("")
  const [genreValue, setGenreValue] = useState("")
  const [streamingValue, setStreamingValue] = useState("")
  const [runTimeValue, setRunTimeValue] = useState("")
  const handlechange = (e) => {
    setInputValue(e.target.value)
  }

  const handleGenreChange = (e) => {
    setGenreValue(e.target.value)
  }

  const handleStreamingChange = (e) => {
    setStreamingValue(e.target.value)
  }
  
  const handleTimeChange = (e) => {
    setRunTimeValue(e.target.value)
  }
  return (
    <>
    <Router>
    <Switch>
    <Route exact path="/">
    <UserDashboard inputValue={inputValue} genreValue={genreValue} streamingValue={streamingValue} handlechange={handlechange} handleStreamingChange={handleStreamingChange} handleGenreChange={handleGenreChange}
   runTimeValue={runTimeValue} handleTimeChange={handleTimeChange}/>
    </Route>
    <Route path="/filmLyst">
      <TVList/>
    </Route>
    <Route path="/tvlyst">
      <FilmList/>
    </Route>
    </Switch>
    </Router>
    </>

  );
}

export default App;



