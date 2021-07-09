// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// Created a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}

  ## Link
  ${data.link}

  ## Install
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license} ![GitHub license](https://img.shields.io/badge/license-mit-blue.svg)

  ## Contributing
  ${data.contributing}

  ## Questions
  ${data.questions}

`;
}

module.exports = generateMarkdown;
