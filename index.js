import fs from 'fs';
import inquirer from 'inquirer';
import colors from 'colors';

// Function to generate the README content
function generateREADME(answers) {
    return `
# ${answers.Title}

## Description
${answers.Description}

## Table of Contents
${answers['Table of Contents']}

## Installation
${answers.Installation}

## Usage
${answers.Usage}

## License
${answers.License}

## Contributing
${answers.Contributing}

## Tests
${answers.Tests}

## Questions
${answers.Questions}
`;
}

// Inquirer prompts to gather information for the README
inquirer
    .prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Provide a description of your project:'
        },
        {
            type: 'input',
            name: 'Table of Contents',
            message: 'List the contents of your project:'
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'How do you install your project?'
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'How do you use your project?'
        },
        {
            type: 'input',
            name: 'License',
            message: 'What license does your project use?'
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'How can others contribute to your project?'
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'Provide information on how to run tests for your application.'
        },
        {
            type: 'input',
            name: 'Questions',
            message: 'Provide contact information for users to send questions to.'
        }
    ])
    .then((answers) => {
        const READMEContent = generateREADME(answers);

        // Write the README file
        fs.writeFile('README.md', READMEContent, (err) =>
            err ? console.error(err) : console.log('README.md successfully created!')
        );
    });