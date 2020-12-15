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
    //     name: '',
    //     image: '../../src/assets/images/projects/',
    //     link: '',
    //     repo: '',
    // },
    // {
    //     name: '',
    //     image: '../../src/assets/images/projects/',
    //     link: '',
    //     repo: '',
    // },
];

export default projects;