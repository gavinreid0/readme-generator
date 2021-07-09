// Included packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
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

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("README.md File Generated"));
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
