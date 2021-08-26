
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
import FilmCard from './Components/FilmList/FilmCard'

function App() {


   
  const [inputValue, setInputValue] = useState("")
  const [genreValue, setGenreValue] = useState("")
  const [streamingValue, setStreamingValue] = useState("")
  const [runTimeValue, setRunTimeValue] = useState("")
  const [films, setFilms] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/films')
    .then(res => res.json())
    .then(data => { 
      setFilms(data) 

    })
  }, []);

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

console.log(films[0]);

  return (
    <>
    <Router>
    <Switch>
    <Route exact path="/">
   { films && <UserDashboard films={films} inputValue={inputValue} genreValue={genreValue} streamingValue={streamingValue} handlechange={handlechange} handleStreamingChange={handleStreamingChange} handleGenreChange={handleGenreChange}
   runTimeValue={runTimeValue} handleTimeChange={handleTimeChange}/> 
   }
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



