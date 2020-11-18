// React app imports
import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

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
            <main>
                <h1>Welcome!</h1>
                <h2><Link to='/home'>Enter Site</Link></h2>
            </main>

            <Route exact path='/home' component={HomeDisplay} />
        </Router>
    );
  }
}

export default App;
