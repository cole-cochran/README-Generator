// TODO: Create a function to generate markdown for README
// Bundled everything into one function to generate the README.
function generateMarkdown(data) {
  return `
  # ${data.title}

  # Description
  ${data.description}

  ## Table of Contents

  * [Installation](#install)

  * [Contributers](#contributers)
  
  * [Usage](#usage)

  * [License](#license)

  * [Tests](#tests)

  * [Profile](#profile)

  * [Contact](#contact)

  ## Install

  ${data.install}
  ## Contributers

  ${data.contributers}
  ## Usage

  ${data.usage}
  ## License

  ${data.license}

  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
  
  ## Tests

  ${data.tests}

  ## Profile
  [GitHub](https://github.com/${data.profile})

  ## Contact
  [Contact Us](mailto:${data.contact})
`;
}

module.exports = generateMarkdown;
