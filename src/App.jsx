
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

function App() {

  const [films, setFilms] = useState([])

 
  useEffect(() => {
    fetch('http://localhost:8080/films')
    .then(res => res.json())
    .then(data => { 
      setFilms(data) 

    })
  }, []);


    // useEffect(() => {
  //   fetch('http://localhost:8080/film/{filmId}', {
  //     method: 'DELETE', 
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(filmOutput),
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log('Success:', data);
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error);
  //   })
  // }, [])


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
    </Switch>
    </Router>
    </>

  );
}

export default App;



