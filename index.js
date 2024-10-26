// Import required modules: inquirer for user prompts, fs for file operations, and custom generateMarkdown function
import inquirer from 'inquirer';
import fs from 'fs/promises';
import generateMarkdown from './utils/generateMarkdown.js';

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of the project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email:',
    },
];

// Function to write README file
async function writeToFile(fileName, data) {
    try {
        await fs.writeFile(fileName, data);
        console.log(`Successfully created ${fileName}`);
      } catch (error) {
        console.error('An error occurred while writing the file:', error);
      }
    }

// Function to initialize app
async function init() {
    try {
      // Prompt the user with questions
      const answers = await inquirer.prompt(questions);
      
      // Generate markdown content based on user's answers
      const markdown = generateMarkdown(answers);
      
      // Display the generated README content in the console
      console.log('\nGenerated README.md content:\n');
      console.log(markdown);
      
      // Write the generated markdown to README.md file
      await writeToFile('README.md', markdown);
    } catch (error) {
      console.error('An error occurred during initialization:', error);
    }
  }
  

// Function call to initialize app
init();
