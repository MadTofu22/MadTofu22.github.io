// React app imports
import React, { Component } from 'react';
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import './App.css'

// Component imports
import HomeDisplay from '../HomeDisplay/HomeDisplay';
import NavBar from '../NavBar/NavBar';
import ResumeDisplay from '../ResumeDisplay/ResumeDisplay';
import AboutDisplay from '../AboutDisplay/AboutDisplay';
import ContactDisplay from '../ContactDisplay/ContactDisplay';
import ProjectsDisplay from '../ProjectsDisplay/ProjectsDisplay';

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
					<Route exact path='/about' component={AboutDisplay} />
					<Route exact path='/contact' component={ContactDisplay} />
					<Route exact path='/projects' component={ProjectsDisplay} />
				</main>
				<footer>
					<span>Copyright &copy; Tom Stutler 2020</span>
					</footer>
			</Router>
		);
	}
}

export default App;
