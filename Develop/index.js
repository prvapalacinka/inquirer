// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
var fs = require('fs');
// license consts:

const apacheLicense = "[![License](https://img.shields.io/badge / License - Apache_2.0 - blue.svg)](https://opensource.org/licenses / Apache - 2.0)"
const mitLicense = "[![License: MIT](https://img.shields.io/badge / License - MIT - yellow.svg)](https://opensource.org/licenses / MIT)"
const unlicenseLicense = "[![License: Unlicense](https://img.shields.io/badge / license - Unlicense - blue.svg)](http://unlicense.org/)"

const licenses  = [apacheLicense, mitLicense, unlicenseLicense];
function init () {
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project/repository?',
      
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
      
    },
    {
      type: 'input',
      name: 'github_username',
      message: 'What is your github username?',
      
    },
    {
      type: 'input',
      name: 'github_link',
      message: 'What is your github project link?',
      
    },
    {
      type: 'input',
      name: 'deployed_app',
      message: 'What is the link to your deployed application?',
      
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which of these licenses was used?',
      choices: ['MIT', 'Apache', 'Unlicense'],
      
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
    console.log(answers);
    writeToFile("NEWREADME.md", generateMarkdown(answers))
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log (["Couldn't be rendered in the current environment"]);
      // Prompt couldn't be rendered in the current environment
    } else {
      console.log (["Something else went wrong"]);
      // Something else went wrong
    }
  });
}
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => console.log(err))
};
// run an fs command to write the file using the above parameters
//fs.writeFile(fileName, data, (err) => console.log(err))


// TODO: Create a function to initialize app
// function init() { 
//   promptUser()
//   .then(function(data) {
//     return generateMarkdown(data);
//   })
//   .then(function(data) {
//     writeToFile(data)
//   })
//   .catch(err => {
//     console.log(err);
//   });
// }

// Function call to initialize app
init();
