import React, {Component} from 'react';
import {hashRouter as Router, Route, Link} from 'react-router-dom';

class NavBar extends Component {

    render () {
        return (
            <div>
                <a class="navlink" href="https://madtofu22.github.io">Home</a>
                <a class="navlink" href="mailto:stutler.tom@gmail.com">Contact Me</a>
                <a class="navlink" href="https://www.linkedin.com/in/tom-stutler-160161164/">LinkedIn</a>
                <a class="navlink" href="Resume/Resume.html" target="_self">Resume</a>
            </div>
        );
    }
}

export default NavBar;