import React, {Component} from 'react';
import {withRouter} from 'react-router';

class NavButton extends Component {

    state = {
        isClicked: false,
    }

    // This function populates the path text for the button
    getBtnText = (path) => {
        switch (path) {
            default:
                return 'INVALID PATH';
            case '/home':
                return 'Home';
            case '/about':
                return 'About';
            case '/resume':
                return 'Resume';
            case '/journey':
                return 'Journey'
            case '/works':
                return 'Works'
            case '/contact':
                return 'Contact'
        }
    }

    render () {
        console.log(this.props)
        return (
            <div 
            className={
                this.props.location.pathname === this.props.page.path ?
                'navBtnClicked'
                :
                'navBtn'
            } 
            onClick={
                () => this.props.history.push(this.props.page.path)
            } >
                <h2 className='navBtnLabel'>{this.props.page.label}</h2>
            </div>
        );
    }
}

export default withRouter(NavButton);