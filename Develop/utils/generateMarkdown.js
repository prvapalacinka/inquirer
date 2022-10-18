// TODO: Create a function that returns a license badge based on which license is passed in

const { default: inquirer } = require("inquirer");

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if ... https://www.mit.edu/~amini/LICENSE.md
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ##Link to deployed pages:
  [Github](https://github.com/prvapalacinka/inquirer)
  ## TOC
  [#Description](#description)
  [#License](#license)
  [#Installation](#installation)
  [#Contribute](#contribute)
  ## Description
  ${data.description}
  ${data.description_challenges}
  ## License
  ${data.license}

  ##Installation
  ${data.description_installation}
  ${data.dependencies}
  ${data.credentials}

  ##Contribute
  ${data.contribute}
`;
}

module.exports = generateMarkdown;
