// TODO: Create a function that returns a license badge based on which license is passed in
const apacheLicense = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
const mitLicense = "![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
const unlicenseLicense = "![License:Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"


const { default: inquirer } = require("inquirer");

// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return mitLicense;
  }
  else if (license === 'Apache') {
    return apacheLicense;
  }
  else {
    return unlicenseLicense;
  }
 return `![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseLink(data.license)}

  ---

  ## Link to deployed pages:
  [Github](https://github.com/prvapalacinka/inquirer
  
  ---

  ## TOC

  - [Links](#links)
  - [Description](#description)
  - [License](#license)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contribute](#contribute)

  ---
  
  ## Contact/Questions
  - Email - ${data.email}
  - Github - ${data.github_username}
  - How else to reach me with any additional questions: ${data.additionalquestions}

  ## Links
  ${data.github_link}
  ${data.deployed_app}

  ## Description
  ${data.description}
  ${data.description_challenges}

  ## License
  ${data.license}

  ## Usage
  ${data.usage}
  ${data.dependencies}
  ${data.credentials}
  
  ## Tests
  ${data.tests}

  ## Contribute
  ${data.contribute}
`;
}

module.exports = generateMarkdown;
