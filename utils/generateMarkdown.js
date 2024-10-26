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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;
