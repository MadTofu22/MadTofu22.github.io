import React, {Component} from 'react';

class HomeDisplay extends Component {
    render () {
        return (
            <div className='foreground'>
                <h1 className='contentHeader home'>Welcome to my portfolio!</h1>
                <div className='contentTextBlock home'>
                    <p className='home'></p>
                    <p className='home'>Throughout this site you will see examples of the applications I have developed, my current Resume, as well an About page where you can get to know me a bit better!</p>
                </div>
            </div>
        );
    }
}

export default HomeDisplay;