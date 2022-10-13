// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown');

inquirer
  .prompt([
   { type: 'input',
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

  ])
  .then((answers) => {
   console.log(generateMarkdown(answers));
   // writeToFile("NEWREADME.md", generateMarkdown(answers))
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // run an fs command to write the file using the above parameters
  //fs.writeFile(fileName, data, (err) => console.log(err))
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
