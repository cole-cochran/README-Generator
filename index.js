// const to require instructor
const inquirer = require('inquirer');
//import { writeFile} from 'fs'
const fs = require('fs');
//import generateMarkdown from './utils/generateMarkdown.js'
const generateMarkdown = require("./utils/generateMarkdown");
// const questions = ('response');
// TODO: Create an array of questions for user input
inquirer
 .prompt ([
    {
        type:"input",
        name:'title',
        message:"Enter the README.md title."
    },{
        type:'input',
        name:'description',
        message:"Enter the Description of the repository."
    },{
        type:'input',
        name:'profile',
        message:"Enter your GitHub profile."
    },{
        type:'input',
        name:'contact',
        message:"Enter your email to contact about the project."
    },{
        type:'input',
        name:'install',
        message:"Add directions on how to install your application."
    },{
        type:'input',
        name:'contributers',
        message:"List your contributers to the project."
    },{
        type:'input',
        name:'usage',
        message:"Explain the use case for your application, and functionality."
    },{
        type:'checkbox',
        name:'license',
        message:"Select the license used for this project.",
        choices:['MIT','MPL','IPL','EPL']
    },{
        type:'input',
        name:'tests',
        message:"List the tests used for the application."
    }
])
.then((response) => {
    writeToFile("./utils/README.md", response)
})
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data))
}
// Funtion to initialize the README file.
// function init() {
//     inquirer.prompt(questions)
//         .then((response) => {
//             writeToFile("./utils/README.md", response)
//         })
// };
// init();