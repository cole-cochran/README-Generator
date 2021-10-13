// const to require instructor
const inquirer = require('inquirer')
//import { writeFile} from 'fs'
const fs = require('fs');
//import generateMarkdown from './utils/generateMarkdown.js'
const generateMarkdown = require("./utils/generateMarkdown")


//import { writeFile} from 'fs'
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
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data))
}
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            writeToFile("generateREADME.md", response)
        })
}
init();