import React, {Component} from 'react';
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
                {pages.map((page, index) => {
                    return <NavButton key={index} page={page} />
                })}
            </>
        );
    }
}

export default NavBar;