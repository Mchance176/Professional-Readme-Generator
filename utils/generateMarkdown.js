// Function to render license badge
function renderLicenseBadge(license) {
  if (!license) return "";
  return `![License](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)`;
}

// Function to render license link
function renderLicenseLink(license) {
  if (!license) return "";
  return `https://opensource.org/licenses/${encodeURIComponent(license)}`;
}

// Function to render license section
function renderLicenseSection(license) {
  if (!license) return "";

  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  return `## License

  This project is licensed under the ${license} license.

${badge}

For more information, see the [LICENSE](${link}) file.`;
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
- [Contributing](#contributing)
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

- GitHub: [${data.github}](https://github.com/Mchance176/Professional-Readme-Generator/${data.github})
- Email: ${data.email} (matt.chance176@gmail.com)
`;
}

export default generateMarkdown;
