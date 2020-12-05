import React, {Component} from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './Nav.css';

// Import custom components
import NavButton from './NavButton';


class NavBar extends Component {

    render () {
        return (
            <Router>
                <NavButton path='/home' />
                {/* <NavButton path='/about' /> */}
                <NavButton path='/resume' />
                {/* <NavButton path='/prime' /> */}
                

            </Router>
        );
    }
}

export default NavBar;