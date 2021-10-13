// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // ![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  // license = data.license === 'MIT' ? "[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]": 
  // data.license === 'MPL'? "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]":  
  // data.license === 'IPL'? "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]":
  // data.license === 'EPL'? "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]":
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // license = data.license === 'MIT' ? "[(https://opensource.org/licenses/MIT)]": 
  //  data.license === 'MPL'? "[(https://opensource.org/licenses/MPL-2.0)]":  
  //  data.license === 'IPL'? "[(https://opensource.org/licenses/IPL-1.0)]":
  //  data.license === 'EPL'? "[(https://opensource.org/licenses/EPL-1.0)]":
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  # Description
  ${data.description}

  ## Table of Contents

  * [installation](#install)

  * [contributers](#contributers)
  
  * [usage](#usage)

  * [license](#license)

  * [tests](#tests)

  * [profile](#profile)

  * [contact](#contact)

  ## install

  ${data.install}
  ## contributers

  ${data.contributers}
  ## usage

  ${data.usage}
  ## license

  ${data.license}

  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
  
  ## tests

  ${data.tests}

  ## Profile
  [github](https://github.com/${data.profile})

  ## Contact
  []
`;
}

module.exports = generateMarkdown;
