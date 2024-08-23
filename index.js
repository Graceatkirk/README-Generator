import fs from 'fs';
import inquirer from 'inquirer';
import colors from 'colors';

// Function to generate the README content
function generateREADME(answers) {
    return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [License](#license)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## License
${answers.license}
`;
}

// Inquirer prompts to gather information for the README
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your project?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can others contribute to your project?'
        },
        {
            type: 'input',
            name: 'license',
            message: 'What license does your project use?'
        }
    ])
    .then((answers) => {
        const READMEContent = generateREADME(answers);

        // Write the README file
        fs.writeFile('README.md', READMEContent, (err) =>
            err ? console.error(err) : console.log('README.md successfully created!')
        );
    });