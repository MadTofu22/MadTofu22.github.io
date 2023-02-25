import React, {Component} from 'react';
import './Resume.css';
import resume from '../../assets/files/Tom Stutler - Resume.pdf';
import pdfIcon from '../../assets/images/icons/pdf.png';


class ResumeDisplay extends Component {

    render () {
        return (
            <div class='foreground resume'>
                <div class='introContainer resume'>
                    <h1 class='introHeader resume'>Tom Stutler</h1>
                    <p class='introText resume'>
                        Passionate leader, developer, learner, and gamer. Seeking challenges and creative solutions.
                    </p>
                    <p class='introContact resume'>
                        Cell: (612) 386-5531 | Email: stutler.tom@gmail.com | <a rel='noreferrer' target='_blank'
                            href='https://portfolio.tomstutler.dev/#/home'>tomstutler.dev</a> | <a rel='noreferrer' target='_blank'
                            href='https://github.com/MadTofu22'>github.com/MadTofu22</a> | <a rel='noreferrer' target='_blank'
                            href='https://www.linkedin.com/in/tom-stutler'>linkedin.com/in/tom-stutler</a>
                    </p>
                </div>

                <div class='sectionContainer resume'>
                    <div class='listContainer'>
                        <div class='languagesList'>
                            <h2 class='sectionHeader resume'>Languages & Frameworks</h2>
                            <ul class='skillsList resume'>
                                <li>Hashicorp Terraform</li>
                                <li>C#</li>
                                <li>Golang</li>
                                <li>Shell Scripting</li>
                                <li>Vue</li>
                                <li>SQL</li>
                                <li>C++</li>
                                <li>Java</li>
                                <li>Python</li>
                                <li>VBA</li>
                                <li>HTML5</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Node</li>
                                <li>jQuery</li>
                                <li>AJAX</li>
                                <li>React</li>
                                <li>Axios</li>
                                <li>Express</li>
                                <li>Redux</li>
                                <li>Passport</li>
                                <li>Flask</li>
                                <li>PsycoPG</li>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>
                        <div class='verticalLine'></div>
                        <div class='toolsList'>
                            <h2 class='sectionHeader resume'>Tools & Software</h2>
                            <ul class='skillsList resume'>
                                <li>AWS</li>
                                <li>Visual Studio</li>
                                <li>Jenkins</li>
                                <li>Hashicorp Vault</li>
                                <li>MySQL Workbench</li>
                                <li>Confluence</li>
                                <li>Sharepoint</li>
                                <li>Postico</li>
                                <li>Postman</li>
                                <li>GitHub</li>
                                <li>Unity Engine</li>
                                <li>Unreal Engine</li>
                                <li>TechExcel DevSuite</li>
                                <li>Atlassian Jira</li>
                                <li>Atlassian Trello</li>
                                <li>Smartsheet</li>
                                <li>Figma</li>
                                <li>Microsoft Office</li>
                                <li>Microsoft Teams</li>
                                <li>Zoom</li>
                                <li>Skype for Business</li>
                                <li>Google Suite</li>
                                <li>Windows 10</li>
                                <li>MacOS</li>
                            </ul>
                        </div>
                        <div class='verticalLine'></div>
                        <div class='skillList'>
                            <h2 class='sectionHeader resume'>Skills & Methods</h2>
                            <ul class='skillsListSingle resume'>
                                <li>Object Oriented Programming</li>
                                <li>Agile Scrum Methodology</li>
                                <li>White-box Testing</li>
                                <li>Black-box Testing</li>
                                <li>Visual/Blueprint Programming</li>
                                <li>Team Collaboration</li>
                                <li>Servant Leadership</li>
                                <li>Project Scoping</li>
                                <li>Remote Communication</li>
                                <li>Change Coordination/Management</li>
                                <li>Trunk Based Git Development</li>
                                <li>Branch Based Git Development</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class='sectionContainer resume'>
                    <h2 class='sectionHeader resume'>Tech Experience</h2>
                    <h3 class='sectionContentHeader resume'>Travelers - Technology Leadership Development Program Participant</h3>
                    <p>In this role I have taken on many rewarding responsibilities that have allowed me to up-skill and hone a variety of skillsets. As a TLDP Participant I have a daily rotational role in which I have been working as an Infrastructure Engineer in our Cloud Enablement SRE team. I also participate in the TLDP as a Co-Founder and Co-Chair of the TLDP Engagement Committee.
                    <br/>
                    <b>Technologies Used:</b> HTML | CSS | Javascript | C# | .Net | Hashicorp Terraform | Hashicorp Vault | AWS | MySQL Workbench | Visual Studio | IaC | Remedy | Service Now
                    </p>
                    <p class='sectionContentGroupHeader resume'>Infrastructure Engineer, Apr 2021 - Present</p>
                    <p class='sectionContentText resume'>
                        <ul class='sectionContentGroupList resume'>
                            <li class='resume'>Support enterpise migration to AWS cloud by provisioning, troubleshooting, and deprovisioning infrastructure resources.</li>
                            <li class='resume'>Develop new, and enhance existing, automation tooling to assist Cloud SRE team and increase efficiency to meet service level objectives.</li>
                            <li class='resume'>Manage Cloud SRE support queue by effectively communicating service offerings with customers and assigning tickets to Cloud SRE Engineers.</li>
                            <li class='resume'>Enhance and design IaC solutions following best practices and compliance standards set by Security and Architecture partner teams.</li>
                            <li class='resume'>Coordinate change manangement requests to ensure stability and security of production services while alligning to industry best practices.</li>
                        </ul>
                    </p>
                    <p class='sectionContentGroupHeader resume'>TLDP Engagement Committee Co-Chair, Jun 2021 - Jun 2022</p>
                    <p class='sectionContentText resume'>
                        <ul class='sectionContentGroupList resume'>
                            <li class='resume'>Collaborate on the mission and structure of a new committee, including devision of responsibilities between Co-Chairs.</li>
                            <li class='resume'>Design, plan, and faciliate events to foster a positvie and inclusive community within the TLDP.</li>
                            <li class='resume'>Architected TLDP EC Clubs Program to provide leadership opportunities to fellow TLDP Participants during program growth.</li>
                        </ul>
                    </p>
                    <h3 class='sectionContentHeader resume'>Prime Digital Academy</h3>
                    <p class='sectionContentGroupHeader resume'>Full Stack Development Student, Aug 2020 - Jan 2021</p>
                    <br/>
                    <p class='sectionContentText resume'>Developed I Have a Project, currently under NDA, a web based application in
                        which managers can connect to even out the peaks and valleys in project-talent time management. This application
                        can be applied to many industries and helps ensure project mangers can always find the talent they need.
                        <br/>
                        <b>Technologies Used:</b> HTML | CSS | Javascript | React | Redux | Passport | Express | Postgres | SQL | GitHub
                        | Google Chrome | Postico | Postman | DBeaver | FullCalendar.io | Email.js
                    </p>
                    <br/>
                    <p class='sectionContentText resume'>Developed MadTofu's Marvelous Mastermind, an independent project in which
                        Users can play the code breaking board game Mastermind in an browser environment, create a profile to track game
                        history, and compare ranks on a leaderboard.
                        <br/>
                        <b>Technologies Used:</b> HTML | CSS | Javascript | React | Redux | Passport | Express | Postgres | SQL | GitHub
                        | OperaGX | Postico | Postman
                    </p>
                    <ul class='sectionContentGroupList resume'>
                        <li class='resume'>Formulated development solutions using industry best practices.</li>
                        <li class='resume'>Engineered web-based application, utilizing a multitude of front-end and back-end
                            languages/frameworks.</li>
                        <li class='resume'>Fostered positive relations in a fast-paced team environment.</li>
                    </ul>
                    <p><b>Technologies Used:</b> HTML | CSS | Javascript | React | Node | Redux | Passport | Express | Body-parser Postgres | SQL | GitHub | OperaGX | Postico | Postman</p>

<<<<<<< HEAD
                    <h3 className='sectionContentHeader resume'>Activision Publishing Inc, Eden Prairie, MN</h3>
                    <p className='sectionContentGroupHeader resume'>Senior QA Tester, Jun 2019 - Jun 2020</p>
                    <p className='sectionContentText resume'>Worked on Call of Duty: Modern Warfare and Call of Duty: Warzone</p>
                    <ul className='sectionContentGroupList resume'>
                        <li className='resume'>Organized and oversaw small to large teams in daily functional and manual testing procedures.</li>
                        <li className='resume'>Tracked and utilized performance metrics to increase productivity and efficiency.</li>
                        <li className='resume'>Encouraged personal and group growth to form cohesive and adaptive team ready for changing project needs.</li>
                        <li className='resume'>Identified and evaluated strengths and areas of improvement in individuals to develop talent.</li>
=======
                    <h3 class='sectionContentHeader resume'>Activision Publishing Inc, Eden Prairie, MN</h3>
                    <p class='sectionContentGroupHeader resume'>Senior QA Tester, Jun 2019 - Jun 2020</p>
                    <p class='sectionContentText resume'>Shipped Call of Duty: Modern Warfare and Call of Duty: Warzone
                        <br/>
                        <b>Technologies Used:</b> Atlassian Jira | TechExcel DevSuite | Xbox One Manager SDK | Playstation Neighborhood | Microsoft Office | VBA
                    </p>
                    <ul class='sectionContentGroupList resume'>
                        <li class='resume'>Organized and oversaw small to large teams in daily functional and manual testing procedures.
                        </li>
                        <li class='resume'>Tracked and utilized performance metrics to increase productivity and efficiency.</li>
                        <li class='resume'>Encouraged personal and group growth to form cohesive and adaptive team ready for changing
                            project needs.</li>
                        <li class='resume'>Identified and evaluated strengths and areas of improvement in individuals to develop talent.
                        </li>
>>>>>>> 96d2b0604818c2ac5db2c72de8d51341777a48a9
                    </ul>
                    <p><b>Technologies Used:</b> Atlassian Jira | TechExcel DevSuite | Xbox One Manager SDK | Playstation Neighborhood</p>

<<<<<<< HEAD
                    <p className='sectionContentGroupHeader resume'>QA Tester, Jun 2018 - Jun 2019</p>
                    <p className='sectionContentText resume'>Worked on Call of Duty: Black Ops 4</p>
                    <ul className='sectionContentGroupList resume'>
                        <li className='resume'>Found and reported issues in a video game environment to help ensure a functional and polished product is delivered to the consumer.</li>
                        <li className='resume'>Provided feedback on game mechanics and design from the consumer perspective to help ensure a balanced and fun product is released to the consumer.</li>
                        <li className='resume'>Worked in fast-paced team environment and adapted to software changes and project needs.</li>
=======
                    <p class='sectionContentGroupHeader resume'>QA Tester, Jun 2018 - Jun 2019</p>
                    <p class='sectionContentText resume'>Shipped Call of Duty: Black Ops 4
                        <br/>
                        <b>Technologies Used:</b> Atlassian Jira | TechExcel DevSuite
                    </p>
                    <ul class='sectionContentGroupList resume'>
                        <li class='resume'>Found and reported issues in a video game environment to help ensure a functional and
                            polished product is delivered to the consumer.</li>
                        <li class='resume'>Provided feedback on game mechanics and design from the consumer perspective to help ensure a
                            balanced and fun product is released to the consumer.</li>
                        <li class='resume'>Worked in fast-paced team environment and adapted to software changes and project needs.</li>
>>>>>>> 96d2b0604818c2ac5db2c72de8d51341777a48a9
                    </ul>
                    <p><b>Technologies Used:</b> Atlassian Jira | TechExcel DevSuite</p>
                </div>

                <div class='sectionContainer resume'>
                    <h2 class='sectionHeader resume'>Work History</h2>
                    <h3 class='sectionContentHeader resume'>T&K Franchise Group, Eagan, MN</h3>
                    <p class='sectionContentGroupHeader resume'>Shift Supervisor, Feb 2017 - Aug 2017</p>
                    <ul class='sectionContentGroupList resume'>
                        <li class='resume'>Encouraged teamwork to foster a positive and efficient work space.</li>
                        <li class='resume'>Ensured deadlines and goals are met in a fast paced environment.</li>
                        <li class='resume'>Communicated with customers to deliver the highest quality product and experience.</li>
                    </ul>

                    <h3 class='sectionContentHeader resume'>Endeavor Air, Minneapolis, MN</h3>
                    <p class='sectionContentGroupHeader resume'>Stores Lead, Jun 2013 - Aug 2014</p>
                    <ul class='sectionContentGroupList resume'>
                        <li>Coordinated with other company departments and bases to ensure timely maintenance of aircraft.</li>
<<<<<<< HEAD
                        <li>Distributed tasks to personnel and provide assistance, or instruction in policy and procedure to new hires, to ensure completion.</li>
                        <li>Verified inventory computations by comparing them to physical counts of stock, and investigate discrepancies or adjust errors.</li>
=======
                        <li>Distributed tasks to personnel and provide assistance, or instruction in policy and procedure to new hires,
                            to assure completion.</li>
                        <li>Verified inventory computations by comparing them to physical counts of stock, and investigate discrepancies
                            or adjust errors.</li>
>>>>>>> 96d2b0604818c2ac5db2c72de8d51341777a48a9
                    </ul>
                    <p class='sectionContentGroupHeader resume'>Stores Clerk, May 2012 - Jun 2013</p>
                    <ul class='sectionContentGroupList resume'>
                        <li>Issued and distributed materials, parts, and tools to maintenance staff based on information from incoming
                            requisitions.</li>
                        <li>Examined contents and compare with records, such as manifests, invoices, or orders, to verify accuracy of
                            incoming or outgoing shipment.</li>
                        <li>Prepared documents such as work orders, bills of lading, or shipping orders, to route materials.</li>
                    </ul>
                </div>

                <div class='sectionContainer resume'>
                    <h2 class='sectionHeader resume'>Education</h2>
                    <h3 class='sectionContentHeader resume'>Prime Digital Academy</h3>
                    <p class='sectionContentText resume'>Full Stack Software Engineering Certification - Graduated Jan 2021</p>
                    <h3 class='sectionContentHeader resume'>Minneapolis Community & Technical College</h3>
                    <p class='sectionContentText resume'>Mathematics A.S. - Graduated May 2018</p>
                </div>
            </div>
        )
    }
}

export default ResumeDisplay;