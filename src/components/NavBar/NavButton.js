import React, {Component} from 'react';
import {withRouter} from 'react-router';

class NavButton extends Component {

    // This function handles the click event for each button.
    handleClick = () => {
        this.props.history.push(this.props.page.path); // Navigate to the next page
        window.scrollTo(0,0); // Return to the top of the page
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
                onClick={this.handleClick} 
            >
                <h2 className='navBtnLabel'>{this.props.page.label}</h2>
            </div>
        );
    }
}

export default withRouter(NavButton);