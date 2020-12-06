import React, {Component} from 'react';
// import './Home.css'

class HomeDisplay extends Component {
    render () {
        return (
            <div className='foreground'>
                <h1 className='contentHeader home'>Welcome to my portfolio!</h1>
                <section className='textBlock home'>
                    <p className='home'>My name is Tom Stutler, MadTofu22 has been my internet handle since I was 13. Ever since I was a young kid I had a passion for technology and innovative software design.</p>
                    <p className='home'>Throughout this site you will see examples of the applications I have developed while at Prime Digital Academy, my current Resume, as well an About Me page where you can get to know me a bit better!</p>
                    <p className='home'>Please feel free to click on any of the links you find throughout the site. If you have and comments, questions, or concerns theres a friendly Contact Me button at the bottom of the page, as well as links to other other sites/contact methods.</p>
                </section>
            </div>
        );
    }
}

export default HomeDisplay;