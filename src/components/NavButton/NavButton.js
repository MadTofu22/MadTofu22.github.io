import React, {Component} from 'react';

class NavButton extends Component {

    // This function populates the path text for the button
    getBtnText = (path) => {
        switch (path) {
            default:
                return 'INVALID PATH';
            case '/home':
                return 'Home';
            case '/prime':
            case '/about':
                return 'About';
        }
    }

    render () {
        return (
            <div className='navBtn'>
                <h2>{() => this.getBtnText(this.props.path)}</h2>
            </div>
        );
    }
}

export default NavButton;