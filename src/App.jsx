
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
import filmData from './assets/filmData';
import HomeLandingPage from './Containers/HomeLandingPage'

function App() {

  const [films, setFilms] = useState([])

 
  useEffect(() => {
    fetch('http://localhost:8080/films')
    .then(res => res.json())
    .then(data => { 
      setFilms(data) 

    })
  }, []);


console.log(films[0]);

  return (
    <>
    <Router>
    <Switch>
    <Route exact path="/">
   { films && <UserDashboard films={films} /> 
   }
    </Route>

    <Route path="/filmLyst">
      <TVList/>
    </Route>
    <Route path="/tvlyst">
      <FilmList/>
    </Route>
    <Route path="/home">
     <HomeLandingPage />
    </Route>
    </Switch>
    </Router>
    </>

  );
}

export default App;



