import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
// import styles from './app.module.css';
import './app.less';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
          {/* <Route path="/">
            <Dashboard />
          </Route> */}
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
