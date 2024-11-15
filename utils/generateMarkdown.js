// Function to render license badge
function renderLicenseBadge(license) {
  if (!license || license === 'None') return "";
  return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
}

// Function to render license link
function renderLicenseLink(license) {
  if (!license || license === 'None') return "";
  return 'https://opensource.org/licenses/MIT';
}

// Function to render license section
function renderLicenseSection(license) {
  if (!license) return "";

  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  return `## License

This application is covered under the MIT license.

${badge}

For more information about this license, please visit [MIT License](${link})`;
}

// Function to generate markdown
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseSection(data.license)}

## Description

${data.description} 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${data.license && data.license !== 'None' ? '- [License](#license)\n' : ''}- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}  

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions about the project, please contact me:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

export default generateMarkdown;
