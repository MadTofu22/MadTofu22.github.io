import React, {Component} from 'react';
import './Resume.css';
import resume from '../../assets/files/Tom-Stutler-Resume.pdf';
import pdfIcon from '../../assets/images/pdf-icon.png';


class ResumeDisplay extends Component {

    render () {
        return (
            <div className='foreground resume'>
                <div className='introContainer resume'>
                    <div className='introDownload resume'>
                        <a className='resume' href={resume} download>
                            <img className='resume' src={pdfIcon} alt='PDF Download icon and link'/>
                        </a>
                    </div>
                    <h1 className='introHeader resume'>Tom Stutler</h1>
                    <p className='introText resume'>
                        Passionate leader, developer, learner, and gamer. Seeking challenges and creative solutions.
                    </p>
                    <p className='introContact resume'>
                        Cell: (612) 386-5531 | Email: stutler.tom@gmail.com | <a rel='noreferrer' target='_blank' href='https://github.com/MadTofu22'>GitHub</a> | <a rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/tom-stutler-160161164'>LinkedIn</a>
                    </p>
                </div>

                <div className='sectionContainer resume'>
                    <h2 className='sectionHeader resume'>Skills & Technologies</h2>
                    <ul className='skillsList resume'>
                        <li>C++</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>Flask</li>
                        <li>Psycopg</li>
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
                        <li>Atlassian Trello</li>
                        <li>Smartsheet</li>
                        <li>Figma</li>
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
            
                <div className='sectionContainer resume'>
                    <h2 className='sectionHeader resume'>Education</h2>
                    <h3 className='sectionContentHeader resume'>Prime Digital Academy</h3> 
                    <p className='sectionContentText resume'>Full Stack Software Engineering Certification - Graduating Jan 2021</p> 
                    <h3 className='sectionContentHeader resume'>Minneapolis Community & Technical College</h3>
                    <p className='sectionContentText resume'>Mathematics A.S. - Graduated May 2018</p>
                </div>

                <div className='sectionContainer resume'>
                    <h2 className='sectionHeader resume'>Tech Experience</h2>
                    <h3 className='sectionContentHeader resume'>Prime Digital Academy</h3>
                    <p className='sectionContentGroupHeader resume'>Full Stack Development Student, Aug 2020 - Jan 2021</p>
                    <p className='sectionContentText resume'>Developed MadTofu's Marvelous Mastermind, an independent project in which Users can play the code breaking board game Mastermind in an browser environment, create a profile to track game history, and compare ranks on a leaderboard.
                    <br/>
                    <b>Technologies Used:</b> HTML | CSS | Javascript | React | Redux | Passport | Express | Postgres | SQL | GitHub | OperaGX | Postico | Postman
                    </p>
                    <ul className='sectionContentGroupList resume'>
                        <li className='resume'>Formulated development solutions using industry best practices.</li>
                        <li className='resume'>Engineered web-based application, utilizing a multitude of front-end and back-end languages/frameworks.</li>
                        <li className='resume'>Fostered positive relations in a fast-paced team environment.</li>
                    </ul>

                    <h3 className='sectionContentHeader resume'>Activision Publishing Inc, Eden Priarie, MN</h3>
                    <p className='sectionContentGroupHeader resume'>Senior QA Tester, Jun 2019 - Jun 2020</p>
                    <p className='sectionContentText resume'>Worked on Call of Duty: Modern Warfare and Call of Duty: Warzone
                    <br/>
                    <b>Technologies Used:</b> Atlassian Jira | TechExcel DevSuite | Xbox One Manager SDK | Playstation Neighborhood
                    </p>
                    <ul className='sectionContentGroupList resume'>
                        <li className='resume'>Organized and oversaw small to large teams in daily functional and manual testing procedures.</li>
                        <li className='resume'>Tracked and utilized performance metrics to increase productivity and efficiency.</li>
                        <li className='resume'>Encouraged personal and group growth to form cohesive and adaptive team ready for changing project needs.</li>
                        <li className='resume'>Identified and evaluated strengths and areas of improvement in individuals to develop talent.</li>
                    </ul>

                    <p className='sectionContentGroupHeader resume'>QA Tester, Jun 2018 - Jun 2019</p>
                    <p className='sectionContentText resume'>Worked on Call of Duty: Black Ops 4
                    <br/>
                    <b>Technologies Used:</b> Atlassian Jira | TechExcel DevSuite
                    </p>
                    <ul className='sectionContentGroupList resume'>
                        <li className='resume'>Found and reported issues in a video game environment to help ensure a functional and polished product is delivered to the consumer.</li>
                        <li className='resume'>Provided feedback on game mechanics and design from the consumer perspective to help ensure a balanced and fun product is released to the consumer.</li>
                        <li className='resume'>Worked in fast-paced team environment and adapted to software changes and project needs.</li>
                    </ul>
                </div>

                <div className='sectionContainer resume'>
                    <h2 className='sectionHeader resume'>Work History</h2>
                    <h3 className='sectionContentHeader resume'>T&K Franchise Group, Eagan, MN</h3>
                    <p className='sectionContentGroupHeader resume'>Shift Supervisor, Feb 2017 - Aug 2017</p>
                    <ul className='sectionContentGroupList resume'>
                        <li className='resume'>Encouraged teamwork to foster a positive and efficient work space.</li>
                        <li className='resume'>Ensured deadlines and goals are met in a fast paced environment.</li>
                        <li className='resume'>Communicated with customers to deliver the highest quality product and experience.</li>
                    </ul>

                    <h3>Endeavor Air, Minneapolis, MN</h3>
                    <p className='sectionContentGroupHeader resume'>Stores Lead, Jun 2013 - Aug 2014</p>
                    <ul>
                        <li>Coordinated with other company departments and bases to ensure timely maintenance of aircraft.</li>
                        <li>Distributed tasks to personnel and provide assistance, or instruction in policy and procedure to new hires, to assure completion.</li>
                        <li>Verified inventory computations by comparing them to physical counts of stock, and investigate discrepancies or adjust errors.</li>
                    </ul>
                    <p className='sectionContentGroupHeader resume'>Stores Clerk, May 2012 - Jun 2013</p>
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