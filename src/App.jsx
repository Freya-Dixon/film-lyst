
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styles from './App.module.scss'
import UserDashboard from './Containers/UserDashboard'
import FilmList from './Components/FilmList'
import UsageGuide from './Containers/UsageGuide'
import HomeLandingPage from './Containers/HomeLandingPage'

function App() {

  const [films, setFilms] = useState([])
  const [refreshFilms, setRefreshFilms] = useState([])
 
  useEffect(() => {
    fetch('http://localhost:8080/films')
    .then(res => res.json())
    .then(data => { 
      setFilms(data) 

    })
  }, [refreshFilms]);

  return (
    <>
    <Router>
    <Switch>
    <Route exact path="/">
    <HomeLandingPage />
    </Route>
    <Route path="/filmLyst">
    { films && <UserDashboard films={films} setRefreshFilms={setRefreshFilms}/> 
   }
    </Route>
    <Route path="/tvlyst">
      <FilmList/>
    </Route>
    <Route path="/usageGuide">
      <UsageGuide />
    </Route>
    </Switch>
    </Router>
    </>

  );
}

export default App;



