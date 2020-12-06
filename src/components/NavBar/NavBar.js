import React, {Component} from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './Nav.css';

// Import custom components
import NavButton from './NavButton';

class NavBar extends Component {

    render () {
        const pages = [
            {
                path: '/home', 
                label: 'Home'
            },
            {
                path: '/about', 
                label: 'About'
            },
            {
                path: '/resume', 
                label: 'Resume'
            },
            {
                path: '/journey', 
                label: 'Journey'
            },
            {
                path: '/projects', 
                label: 'Projects'
            },
            {
                path: '/contact',
                label: 'Contact'
            },
        ];

        return (
            <>
                {pages.map(page => {
                    return <NavButton page={page} />
                })}
            </>
        );
    }
}

export default NavBar;