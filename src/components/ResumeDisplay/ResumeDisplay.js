import React, {Component} from 'react';
import resume from '../../assets/Tom-Stutler-Resume.pdf';

class ResumeDisplay extends Component {

    render () {
        return (
            <div class="foreground">
                <div class="download-link">
                    <a href={resume} download>
                        <img src="/assets/images/pdf-icon.png" alt="PDF Download icon and link"/>
                    </a>
                </div>
                <h1>Tom Stutler</h1>
                <p class="intro">
                    Passionate leader, developer, learner, and gamer. Seeking challenges and creative solutions.
                </p>
                <p class="contact-info">
                    Cell: (612) 386-5531 | Email: stutler.tom@gmail.com | <a href="https://github.com/MadTofu22">GitHub</a> | <a href="https://www.linkedin.com/in/tom-stutler-160161164">LinkedIn</a>
                </p>

                <div class="section">
                    <h2>Skills & Technologies</h2>
                    <ul class="skillsCol">
                        <li>C++</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Express</li>
                        <li>Postgres</li>
                        <li>SQL</li>
                        <li>Javascript</li>
                        <li>Passport</li>
                        <li>Material-UI</li>
                        <li>GitHub</li>
                        <li>TechExcel DevSuite</li>
                        <li>Atlassian Jira</li>
                        <li>Agile Methodology</li>
                        <li>Black-box Testing</li>
                        <li>Unity Engine</li>
                        <li>Unreal Engine</li>
                        <li>Postico</li>
                        <li>Postman</li>
                        <li>Windows 10</li>
                        <li>MacOS</li>
                    </ul>
                </div>
            
                <div class="section">
                    <h2>Education</h2>
                    <h3>Prime Digital Academy</h3> 
                    <p class="education">Full Stack Software Engineering Certification - Graduating Jan 2021</p> 
                    <h3>Minneapolis Community & Technical College</h3>
                    <p class="education">Mathematics A.S. - Graduated May 2018</p>
                </div>

                <div class="section">
                    <h2>Tech Experience</h2>
                    <h3>Prime Digital Academy</h3>
                    <p class="job">Full Stack Development Student, Aug 2020 - Jan 2021</p>
                    <p class="job-description">Developing MadTofu's Marvelous Mastermind, an independent project in which Users can play the code breaking board game Mastermind in an browser environment and create a profile to track game history and compare ranks.
                    <br/>Technologies Used: HTML | CSS | Javascript | React | Redux | Passport | Express | Postgres | SQL | GitHub | OperaGX | Postico | Postman
                    </p>
                    <ul>
                        <li>Formulated development solutions using industry best practices.</li>
                        <li>Engineered web-based application, utilizing a multitude of front-end and back-end languages/frameworks.</li>
                        <li>Fostered positive relations in a fast-paced team environment.</li>
                    </ul>

                    <h3>Activision Publishing Inc, Eden Priarie, MN</h3>
                    <p class="job">Senior QA Tester, Jun 2019 - Jun 2020</p>
                    <p class="job-description">Worked on Call of Duty: Modern Warfare and Call of Duty: Warzone
                    <br/>Technologies Used: Atlassian Jira | TechExcel DevSuite | Xbox One Manager SDK | Playstation Neighborhood
                    </p>
                    <ul>
                        <li>Organized and oversaw small to large teams in daily functional and manual testing procedures.</li>
                        <li>Tracked and utilized performance metrics to increase productivity and efficiency.</li>
                        <li>Encouraged personal and group growth to form cohesive and adaptive team ready for changing project needs.</li>
                        <li>Identified and evaluated strengths and areas of improvement in individuals to develop talent.</li>
                    </ul>

                    <p class="job">QA Tester, Jun 2018 - Jun 2019</p>
                    <p class="job-description">Worked on Call of Duty: Black Ops 4
                    <br/>Technologies Used: Atlassian Jira | TechExcel DevSuite
                    </p>
                    <ul>
                        <li>Found and reported issues in a video game environment to help ensure a functional and polished product is delivered to the consumer.</li>
                        <li>Provided feedback on game mechanics and design from the consumer perspective to help ensure a balanced and fun product is released to the consumer.</li>
                        <li>Worked in fast-paced team environment and adapted to software changes and project needs.</li>
                    </ul>
                </div>

                <div class="section">
                    <h2>Work History</h2>
                    <h3>T&K Franchise Group, Eagan, MN</h3>
                    <p class="job">Shift Supervisor, Feb 2017 - Aug 2017</p>
                    <ul>
                        <li>Encouraged teamwork to foster a positive and efficient work space.</li>
                        <li>Ensured deadlines and goals are met in a fast paced environment</li>
                        <li>Communicated with customers to deliver the highest quality product and experience.</li>
                    </ul>

                    <h3>Endeavor Air, Minneapolis, MN</h3>
                    <p class="job">Stores Lead, Jun 2013 - Aug 2014</p>
                    <ul>
                        <li>Coordinated with other company departments and bases to ensure timely maintenance of aircraft.</li>
                        <li>Distributed tasks to personnel and provide assistance, or instruction in policy and procedure to new hires, to assure completion.</li>
                        <li>Verified inventory computations by comparing them to physical counts of stock, and investigate discrepancies or adjust errors.</li>
                    </ul>
                    <p class="job">Stores Clerk, May 2012 - Jun 2013</p>
                    <ul>
                        <li>Issued and distributed materials, parts, and tools to maintenance staff based on information from incoming requisitions.</li>
                        <li>Examined contents and compare with records, such as manifests, invoices, or orders, to verify accuracy of incoming or outgoing shipment.</li>
                        <li>Prepared documents such as work orders, bills of lading, or shipping orders, to route materials.</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ResumeDisplay;