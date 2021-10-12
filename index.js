const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")
console.log(generateMarkdown)
//import generateMarkdown from './utils/generateMarkdown.js'
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
    fs.writeFile("README.md",'\n',(err)=>
    err ? console.log(err) : console.log('gennyMD4u'))
//     fs.writeFile("README.md",JSON.stringify(fileName, data,'\t'),(err)=>
//   err ? console.log(err) : console.log('success!')
//   )
 }
//  )
// TODO: Create a function to initialize app
function init() {
    //writeToFile(fileName,data)
}
// Function call to initialize app
init()