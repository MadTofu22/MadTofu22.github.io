import React, {Component} from 'react';
import './About.css'

class AboutDisplay extends Component {
    
    render () {
        return (
            <div className='foreground'>
                <h1 className='about'>Who is Tom "MadTofu22" Stutler?</h1>
                <p className='about'>At my core, I am an experimenter. I love to look at the puzzles the world around us has to offer and attempt to unravel those mysteries in unique ways. Having grown up in a household that prized technology and scientific advancement, my curiosity towards STEM fields was fostered early on. </p>
            </div>
        );
    }
}

export default AboutDisplay;