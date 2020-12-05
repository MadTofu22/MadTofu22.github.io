import React, {Component} from 'react';

class HomeDisplay extends Component {
    render () {
        return (
            <>
                <h1>Welcome to my portfolio!</h1>
                 <div class="foreground">
                    <header>
                        <h1>MadTofu22's Marvelous Manifest</h1>
                    </header>

                    <section class="intro">
                        <p>Welcome to my website! My name is Tom Stutler, MadTofu22 has been my internet handle since I was 13. Ever since I was a young kid I had a passion for technology and innovative software design.</p>
                        <p>Throughout this site you will see examples of the applications I have developed while at Prime Digital Academy, my current Resume, as well an About Me page where you can get to know me a bit better!</p>
                        <p>Please feel free to click on any of the links you find throughout the site. If you have and comments, questions, or concerns theres a friendly Contact Me button at the bottom of the page, as well as links to other other sites/contact methods.</p>
                    </section>

                    <div class="Prime">
                        <h2>Prime Academy</h2>
                        <h3>Tier 1</h3>
                        <p>During this section of the Prime Digital Academy experience, we focused on learning the basics of a programming. Thiw was done by learning Javascript, HTML, and CSS.</p> 
                        <ul>
                        <li><a href="Tier 1/Week 1/index.html" target="_self">Week 1</a> - The purpose of this assignment was learning the basics of git, reinforcing the use of the Terminal, and utilizing HTML, CSS, and Javascript.</li>
                        <li><a href="Tier 1/Week 2/index.html" target="_self">Week 2</a> - The purpose of this assignment was learning variables and conditionals in Javascript. As well as using a browsers built in console to see the results.</li>
                        <li><a href="Tier 1/Week 3/index.html" target="_self">Week 3</a> - This week we learned and practiced coding loops and arrays.</li>
                        <li><a href="Tier 1/Week 4/index.html" target="_self">Week 4</a> - This week we learned functions and reinforced previous knowledge.</li>
                        <li><a href="Tier 1/Week 5/index.html" target="_self">Week 5</a> - This week we learned about objects. I pushed further to learn about DOM and gathering input from the user to use in javascript functions.</li>
                        <li><a href="Tier 1/Week 6/index.html" target="_self">Week 6</a> - This week we learned about the DOM and getting/pushing info between html, css, and javascript files.</li>
                        </ul>

                        <h3>Tier 2</h3>
                        <p>In Tier 2, we enchanced the skills we developed in Tier 1, then agressively increased our knowledge base and skillset. During this time we went from front end coders to full stack engineers. This was a massive challenge, but one I was thrilled to take on. </p>
                        <ul>
                        <li>Week 1 - During this week, we practiced our skills learned in Tier 1, and added in the jQuery framework to allow DOM manipulation. This lead to new heights of adaptive front end development.</li>
                        
                        <li>Week 2 - In just one more week, we added in servers. Using the Express.js framework, we created and hosted our own local servers to develop applications with shared short term memory. One example of this is a <a href="https://madtofu22s-math-manipulator.herokuapp.com" target="_blank">Server Side Calculator</a> application. This was also the first application that I have hosted in a public domain!</li>

                        <li>Week 3 - Now that we had an understanding of a server, we added that last part of the stack to our toolbelt, the database. This came in the form of PostgreSQL for our cohort. By the end of week, we could proudly call ourselves Full Stack Engineers and had created our first CRUD (Create, Read, Update, Delete) web-based application. Please check out my <a href="https://madtofu22s-task-list.herokuapp.com" target="_blank">To-Do App here.</a></li>

                        <li>Week 4 - With the concepts and abilities of full stack development in our toolkit, we took a step back. This week we focused on learning the React.js framwork. I've gotta say, JSX is much nicer than having to write Javascript and HTML separately. Link to hosted app to come, but in the mean time you can view the <a href="https://github.com/MadTofu22/react-gallery" target="_blank">GitHub repo here.</a></li>
                        

                        </ul>
                    </div>

                    <footer>
                        <nav>
                        <a class="navlink" href="https://madtofu22.github.io">Home</a>
                        <a class="navlink" href="mailto:stutler.tom@gmail.com">Contact Me</a>
                        <a class="navlink" href="https://www.linkedin.com/in/tom-stutler-160161164/">LinkedIn</a>
                        <a class="navlink" href="Resume/Resume.html" target="_self">Resume</a>
                        </nav>
                    </footer>
                    </div>
            </>
        );
    }
}

export default HomeDisplay;