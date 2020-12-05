// React app imports
import React, { Component } from 'react';
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import './App.css'

// Component imports
import HomeDisplay from '../HomeDisplay/HomeDisplay';
import NavBar from '../NavBar/NavBar';
import ResumeDisplay from '../ResumeDisplay/ResumeDisplay';
import JourneyDisplay from '../JourneyDisplay/JourneyDisplay';

class App extends Component {

	render() {
		return (
			<Router>
				<header>
					<NavBar />
				</header>
				<main>
					<Route exact path='/'>
						<Redirect to='/home' />
					</Route>
					<Route exact path='/home' component={HomeDisplay} />
					<Route exact path='/resume' component={ResumeDisplay} />
					<Route exact path='/journey' component={JourneyDisplay} />
					{/* <Route exact path='/about' component={AboutDisplay} /> */}
				</main>
				<footer>Copyright &copy; Tom Stutler 2020</footer>
			</Router>
		);
	}
}

export default App;
