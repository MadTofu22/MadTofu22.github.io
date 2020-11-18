import React, {Component} from 'react';
import {hashRouter as Router, Route, Link} from 'react-router-dom';

class NavBar extends Component {

    render () {
        return (
            <Router>
                <NavButton path='/home' />
                <NavButton path='/resume' />
                <NavButton path='/prime' />
                <NavButton path='/about' />

                <Route exact path='/home' component={HomeDisplay} />
                <Route exact path='/resume' component={ResumeDisplay} />
                <Route exact path='/prime' component={PrimeDisplay} />
                <Route exact path='/about' component={AboutDisplay} />
            </Router>
        );
    }
}

export default NavBar;