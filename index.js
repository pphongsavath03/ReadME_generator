// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");



// TODO: Create an array of questions for user input
inquirer
    .prompt([{
            type: "input",
            message: "Enter the name of the project.",
            name: "title"
        },
        {
            type: "input",
            message: "Enter a brief description for your project:",
            name: "description"
        },
        {
            type: "input",
            message: "Provide installation instructions if necessary.",
            name: "installation"
        },
        {
            type: "input",
            message: "Provide instructions on how to use your program. ",
            name: "instructions"
        },
        {
            type: "input",
            message: "Enter contribution guidelines for your project:",
            name: "contribution"
        },
        {
            type: "input",
            message: "Enter test information for your project:",
            name: "testing"
        },
        {
            type: "input",
            message: "Enter your GitHub Username:",
            name: "github"
        },
        {
            type: "input",
            message: "Enter your email address:",
            name: "email"
        },
        {
            type: "list",
            message: "Please select a license listed below",
            name: "license",
            choices: [
                "MIT License",
                "GNU AGPLv3",
                "Boost Software License 1.0",
                "Mozilla Public License 2.0",
                "Apache License, Version 2.0"
            ]
        }
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log("readme file created");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(input) {
            console.log(input);
            writeToFile('README.md', generateMarkdown(input));
        });
}

// Function call to initialize app
init();