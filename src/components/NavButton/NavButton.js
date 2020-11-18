import React, {Component} from 'react';
import {withRouter} from 'react-router';

class NavButton extends Component {

    // This function populates the path text for the button
    getBtnText = (path) => {
        switch (path) {
            default:
                return 'INVALID PATH';
            case '/home':
                return 'Home';
            case '/prime':
                return 'Prime Digital Acadmey'
            case '/about':
                return 'About';
            case '/resume':
                return 'Resume';
        }
    }

    render () {
        return (
            <div className='navBtn' onClick={() => this.props.history.push(this.props.path)}>
                <h2>{this.getBtnText(this.props.path)}</h2>
            </div>
        );
    }
}

const NavButtonWithRouter = withRouter(NavButton);
export default NavButtonWithRouter;