/*
This module holds the information for each project that is displayed in the Projects tab.
Each projects data is represented by an object with the following properties.
{
    name: ``, // A title for the project
    path: ``, // The url path that will be added to /projects
    image: ``, // The image file name in the public/assets/images/projects directory
    link: ``, // The url to hosted application
    repo: ``, // The url to the github repo
    synopsis: ``, // A quick description for the small block in the initial projects display
    description: [''], // An array of paragraphs to be displayed in the full page project view
    enjoyed: ``, // A single paragraph to include on the full page project view describing what I liked about developing this project
    challenges: ``, // A single paragraph to include on the full page project view describing what I found challenging about this project.
    technologies: [''], // An array of strings listing the technologies used in developing this project
}
*/

const projects = [
    {
        name: `MadTofu22's Marvelous Mastermind`,
        path: `/project/mastermind`,
        image: `mastermind.png`,
        video: `https://www.youtube.com/embed/COGbjKvywSI`,
        link: `https://madtofus-marvelous-mastermind.herokuapp.com/#/home`,
        repo: `https://github.com/MadTofu22/madtofus-marvelous-mastermind`,
        synopsis: `A web app version of the code breaking board game Mastermind with leaderboards.`,
        description: `This project is the culmination of knowledge I learned in Tiers 1 and 2 at Prime Digital Academy. In this application User's are able to play the game Mastermind, create a profile, update their information, delete their profile, and view rankings on the leaderboards.`,
        technologies: [`HTML`, `CSS`, `Javascript`, `Express.js`, `Body-Parser.js`, `Postgreql`, `React`, `React Router`, `Redux`, `Passport`, `Node`,],
    },
    {
        name: `I Have a Project`,
        path: `/project/`,
        image: `ihap.png`,
        link: ``,
        video: `https://www.youtube.com/embed/658-OlkiTCQ`,
        repo: `https://github.com/MadTofu22/i-have-a-project`,
        synopsis: `Connecting managers to even out time and labor peaks/valleys.`,
        description: `This project was my first completed group project as a developer. At Prime Digital Academy, we are given the opportunity to work with a client and make their dreams come true by developing their app idea. Our client, a Prime alum, that wanted to create a SaaS prototype in an effort to get funding and create an enterprise level application for a targeted industry. We demonstrated this application in the nice of 3D Design, however I'm proud to say this application could be used in many other places, or even inter-departmentally with a Scrum Agile team.`,
        technologies: ['HTML', 'CSS', 'Javascript', 'React', 'Redux', 'Passport', 'Express', 'Postgres', 'SQL', 'GitHub', 'Google Chrome', 'Postico', 'Postman', 'DBeaver', 'FullCalendar.io', 'Email.js'],
    },
    {
        name: `Feedback Survey`,
        path: `/project/feedback`,
        image: `feedback_loop.png`,
        link: `https://madtofu22s-feedback-survey.herokuapp.com/#/`,
        repo: `https://github.com/MadTofu22/redux-feedback-loop`,
        synopsis: `A short survey app used to develope SQL skills and learn the Material-UI library.`,    
        description: `This simple survey allows a student to enter ratings and comments about their day. These ratings and comments are then viewable by an Admin to mark entries for review, sort through them, and/or delete entries.`,
        technologies: [`HTML`, `CSS`, `Javascript`, `jQuery`, `React`, `Node`, `Express`, `BodyParser`, `Material-UI`],
    },
    {
        name: `MadTofu22's To-Do App`,
        path: `/project/to-do`,
        image: `to_do_app.png`,
        link: `https://madtofu22s-task-list.herokuapp.com`,
        repo: `https://github.com/MadTofu22/weekend-sql-to-do-list`,
        synopsis: `This CRUD project allows the user to add or create tasks and store them to a database.`,
        description: `This CRUD application demonstrates my ability to develop REST APIs and update a database usign SQL. I also learned a good amount about conditional rendering while developing this application.`,
        technologies: [`HTML`, `CSS`, `Javascript`, `jQuery`, `Express.js`, `Body-Parser.js`, `Postgreql`, `React`, `React Router`, `Redux`, `Node`,],
    },
    {
        name: `MadTofu22's Marvelous Math Manipulator`,
        path: `/projects/math-manipulator`,
        image: `math_manipulator.png`,
        link: `https://madtofu22s-math-manipulator.herokuapp.com`,
        repo: `https://github.com/MadTofu22/jquery-server-side-calculator`,
        synopsis: `Learned how to connect a web app to an express server with this simple calculator.`,
        description: [
            `MadTofu's Marvelous Math Manipulator, at it's core, is a simple calculator. It handles fundamental mathematical operations on 2 numbers using plus. On top of the calculations it displays a history of calculation that are stored on the server. At any point a user can click on a previously ran calculation to re-run it and see the solution.`,
            `This was developed as a weekend challenged while at Prime Digital Academy in Tier 2. During this project I reinforced my knowledge of Javascript, HTML, and CSS, while learning new skills in jQuery, Node, Express, Body-Parser, and Heroku.`
        ],
        enjoyed: `I very much enjoyed seeing my first application hosted where the rest of the world could see and interact with it!`,
        challenges: `During development I faced several challenges including formatting with CSS and getting the DOM to update properly.`,
        technologies: [
            'HTML', 'CSS', 'Javascript', 'jQuery', 'React', 'Node', 'Express', 'Body-Parser', 'Heroku',  
        ],
    },
    {
        name: 'Feedback Survey',
        path: '/project/math_manipulator',
        image: 'feedback_loop.png',
        link: 'https://madtofu22s-feedback-survey.herokuapp.com/#/',
        repo: 'https://github.com/MadTofu22/redux-feedback-loop',
        synopsis: 'A short survey app used to develope SQL skills and learn the Material-UI library.',
    },
    // {
    //     name: ``,
    //     path: `/project/`,
    //     image: ``,
    //     link: ``,
    //     repo: ``,
    //     synopsis: ``,
    //     description: ``,
    //     technologies: [],
    // },
];
 
export default projects;