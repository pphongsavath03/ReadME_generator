// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseBadge = "";

    if (license == "MIT License") {
        licenseBadge = "[![license](https://img.shields.io/badge/license-MITLicense-blue)](https://shields.io)";
    } else if (license == "GNU AGPLv3") {
        licenseBadge = "[![license](https://img.shields.io/badge/license-GNUAGPLv3-blue)](https://shields.io)";
    } else if (license == "Boost Software License 1.0") {
        licenseBadge = "[![license](https://img.shields.io/badge/license-BoostSoftwareLicense1.0-blue)](https://shields.io)";
    } else if (license == "Mozilla Public License 2.0") {
        licenseBadge = "[![license](https://img.shields.io/badge/license-MozillaPublicLicense2.0-blue)](https://shields.io)";
    } else if (license == "Apache License 2.0") {
        licenseBadge = "[![license](https://img.shields.io/badge/license-ApacheLicense2.0-blue)](https://shields.io)";
    } else if (license == "No License selected") {
        licenseBadge = "";
    }

    return licenseBadge;
};




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

    let licenseLink = "";

    if (license == "MIT License") {
        licenseLink = "https://choosealicense.com/licenses/mit/";
    } else if (license == "GNU AGPLv3") {
        licenseLink = "https://choosealicense.com/licenses/agpl-3.0/";
    } else if (license == "Boost Software License 1.0") {
        licenseLink = "https://choosealicense.com/licenses/bsl-1.0/";
    } else if (license == "Mozilla Public License 2.0") {
        licenseLink = "https://choosealicense.com/licenses/mpl-2.0/";
    } else if (license == "Apache License 2.0") {
        licenseLink = "https://choosealicense.com/licenses/apache-2.0/";
    } else if (license == "No License selected") {
        licenseLink = "";

    }

    return licenseLink;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    let licenseBadge = renderLicenseBadge(data.license);
    let licenseLink = renderLicenseLink(data.license);

    return `# ${data.title}

  ## Description

  ${data.description}

  ${licenseBadge}
  

  ## Table of Contents 
  
  - [Title](#title)
  
  - [Description](#description)

  - [Installation](#installation)

  - [Instructions](#instructions)

  - [License](#license)

  - [Contribution](#contribution)

  - [Testing](#testing)
  
  
  ## Installation

  ${data.installation}
  
  ## Usage

  ${data.instructions}

  ## License

  ${data.license}
  ${licenseLink}
  ---
  
  
  ## Contribution

  ${data.contribution}

  ## Testing

  ${data.testing}  

  ## Contacts

  Github Profile: https://github.com/${data.username}
  Email: ${data.email}
  

`;
};

module.exports = generateMarkdown;