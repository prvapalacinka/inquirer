// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
var fs = require('fs');
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project/repository?',
      default: 'Test'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which of these?',
      choices: ['MIT', 'Apache', 'Unlicense'],
      default: 'One'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your application',
    },
    {
      type: 'input',
      name: 'description_challenges',
      message: 'What are some challenges you were presented with while developing your application?',
    },
    {
      type: 'input',
      name: 'description_installation',
      message: 'How can a user install and use the application?',
    },
    {
      type: 'input',
      name: 'dependencies',
      message: 'Please list any dependencies within your project or write, "No dependencies":',
    },
    {
      type: 'input',
      name: 'credentials',
      message: 'Please write any credentials that may be required for your app:',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Please write the guidelines for contribution:',
    },
  ])
  .then((answers) => {
    console.log(generateMarkdown(answers));
    // writeToFile("NEWREADME.md", generateMarkdown(answers))
  })
  .catch((error) => {
    if (error.isTtyError) {
      prompt(["Couldn't be rendered in the current environment"]);
      // Prompt couldn't be rendered in the current environment
    } else {
      prompt(["Something else went wrong"]);
      // Something else went wrong
    }
  });
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('NEWREADME.md', generateMarkdown(answers))
};
// run an fs command to write the file using the above parameters
//fs.writeFile(fileName, data, (err) => console.log(err))


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
