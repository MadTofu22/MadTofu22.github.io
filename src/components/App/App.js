// React app imports
import React, { Component } from 'react';
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom';

// Component imports
import HomeDisplay from '../HomeDisplay/HomeDisplay';
import NavBar from '../NavBar/NavBar';

class App extends Component {

  render() {
    return (
      <Router>
        <header>
          <NavBar />
        </header>
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
      </Router>
    );
  }
}

export default App;
