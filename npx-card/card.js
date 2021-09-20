const chalk = require('chalk');
const boxen = require('boxen');
const inquirer = require('inquirer');
const clear = require('clear');
const open = require('open')
const fs = require('fs');
const path = require('path');
// Clear the terminal before showing npx card
clear();

const data = {
    name: chalk.white('             Elisandre Laenens'),
    handle: chalk.blueBright('MomOfTheBiche'),
    work: chalk.white('Junior web developer'),
    fact: chalk.white('Biche is the nickname of my cat'),
    github: chalk.white('https://github.com/') + chalk.yellow('ElisandreL'),
    linkedin: chalk.white('https://www.linkedin.com/in/') + chalk.blue('elisandre-laenens/'),
    npx: chalk.white('npx') + chalk.red(' furbiche@1.0.0'),
    labelWork: chalk.white.bold('       Work:'),
    labelFact: chalk.white.bold('       Fun fact:'),
    labelGitHub: chalk.white.bold('       GitHub:'),
    labelLinkedIn: chalk.white.bold('       LinkedIn:'),
    labelCard: chalk.white.bold('       Card:')
};

const me = boxen(
    [
        `${data.name} / ${data.handle}`,
        ``,
        ``,
        `${data.labelWork} ${data.work}`,
        `${data.labelFact}  ${data.fact}`,
        ``,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn} ${data.linkedin}`,
        ``,
        `${data.labelCard} ${data.npx}`,
        ``
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue"
    }
);

// Show the boxen
console.log(me);

