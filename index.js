// Included packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
// Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project? "
    },
    {
        type: "input",
        name: "description",
        message: "Provide a brief description about your project: "
    },
    {
        type: "input",
        name: "link",
        message: "Add a link to your deployed project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Provide instructions for a user to install & run this application: "
    },
    {
        type: "input",
        name: "usage",
        message: "Include instructions for how to use: "
    },
    {
        type: "checkbox",
        name: "license",
        message: "Select a license or select 'Unlicense': ",
        choices: [
            "Apache",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open Data Commons",
            "Unlicense"
        ]
    },
    {
      type: "input",
      name: "contributing",
      message: "Add any collaborators:",
    },
    {
      type: "input",
      name: "questions",
      message: "Add contact information:",
    },

];

// Created a function to write a README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("Successfully wrote: " + fileName));
}

// Created a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const README = generateMarkdown(answers);
        return writeToFile("README.md", README)
    })
    .catch(err => console.error(err));
}

// Function call to initialize app
init();
