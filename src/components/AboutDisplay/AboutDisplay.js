import React, {Component} from 'react';

class AboutDisplay extends Component {
    
    render () {
        return (
            <div className='foreground'>
                <h1 className='contentHeader about'>Who is Tom "MadTofu22" Stutler?</h1>
                <div className='contentTextBlock about'>
                    <p className='about'>
                        My name is Tom Stutler, MadTofu22 has been my internet handle since I was 13. Ever since I was a young kid I had a passion for technology and innovative software design. At my core, I am an experimenter. I love to look at the puzzles the world around us has to offer, and attempt to unravel those mysteries in unique ways. Having grown up in a household that prized technology and scientific advancement, my curiosity towards STEM fields was fostered early on. This curiosity has led me to being a self-motivated and driven individual.
                    </p>

                    <p className='about'>
                        While learning the basics of electrical engineering, excelling in math class, and even becoming a founding member of my high schools F.I.R.S.T. Robotics team, I have always had an avid fascination for video games. My belief is that video games have become the height of entertainment by providing art in an interactive medium. I spent a great majority of my free time playing a myriad of games, attempting to experience as much as I can. After working with many different technologies and platforms throughout my professional life, I learned to extend my love of games to software as a whole. Being able to translate a vision into a work of useable art through code is a truly inspiring process.When I'm not working or playing games, I do enjoy a leisurely round of disc golf or going for a bike ride. While competing can be fun, I tend to see these activities as an opportunity to spend time with friends and loved ones.
                    </p>
                    
                    <p className='about'>
                        Another aspect of life I absolutely love is learning and watching others learn. As a kid I often thought about becoming a teacher, but realized there were other ways to obtain the same goal. Leading teams has become a thrill and pleasure of mine. Helping the individuals grow and encouraging team cohesion to watch and be a part of a successful group is truly a honor to be a part of.
                    </p>
                </div>
            </div>

        );
    }
}

export default AboutDisplay;