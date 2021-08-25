import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styles from './App.module.scss'
import UserDashboard from './Containers/UserDashboard'

function App() {
  return (
    <>
    <Router>
    <Route exact path="/">
    <UserDashboard />
    </Route>
    </Router>
    </>
  );
}

export default App;



