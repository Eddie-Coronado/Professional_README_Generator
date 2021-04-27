// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const genrateMarthdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter in a short project description.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please add all your contribution'
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'NPM', 'None']
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Please enter in your Git Hub URL.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter in your email address'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
        writeToFile('README.md', genrateMarthdown(answers));
        console.log('Successfully created README.md!')
    })

}

// Function call to initialize app
init();