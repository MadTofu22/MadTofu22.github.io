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
            case '/journey':
                return 'My Journey'
            case '/works':
                return 'My Works'
            case '/about':
                return 'About';
            case '/resume':
                return 'Resume';
        }
    }

    render () {
        return (
            <div className='navBtn' onClick={() => this.props.history.push(this.props.path)}>
                <h2 className='navBtnLabel'>{this.getBtnText(this.props.path)}</h2>
            </div>
        );
    }
}

export default withRouter(NavButton);