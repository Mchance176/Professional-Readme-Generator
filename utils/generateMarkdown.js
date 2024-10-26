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

##

`;
}

export default generateMarkdown;
