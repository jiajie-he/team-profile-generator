const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./util/generateHtml');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
let count = 0;

const team = []

function start() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'managerName',
        },
        {
            type: 'input',
            message: "What is the team manager's id?",
            name: 'managerId',
        },
        {
            type: 'input',
            message: "What is the team manager's email?",
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: "What is the team manager's office number?",
            name: 'managerOfficeNumber',
        },
        {
            type: 'list',
            choices: ['Engineer', 'Intern', 'Done adding employees'],
            message: 'Do you want to add employee data?',
            name: 'selection'
        },
    ]).then(ans => {
        const manager = new Manager(
            ans.managerName,
            ans.managerId,
            ans.managerEmail,
            ans.managerOfficeNumber
        );
        team.push(manager)
        if(ans.selection==="Engineer"){
            engQ();
        } else if(ans.selection==="Intern"){
            intQ();
        } else {
            fs.writeFile(`./output/index.html`, generateHtml(team), (err,data) => {
                if (err) {
                    throw err
                }
                console.log('success!')
            })
        }
    })
}
function engQ() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the team engineer's name?",
            name: 'engineerName',
        },
        {
            type: 'input',
            message: "What is the team engineer's id?",
            name: 'engineerId',
        },
        {
            type: 'input',
            message: "What is the team engineer's email?",
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: "What is the team engineer's GitHub username?",
            name: 'engineerGithub',
        },
        {
            type: 'list',
            choices: ['Engineer', 'Intern', 'Done adding employees'],
            message: 'Do you want to add employee data?',
            name: 'selection'
        },
    ]).then(ans => {
        const engineer = new Engineer(
            ans.engineerName,
            ans.engineerId,
            ans.engineerEmail,
            ans.engineerGithub
            );
            team.push(engineer)
            if(ans.selection==="Engineer"){
                const engineer = new Engineer(
                    ans.engineerName,
                    ans.engineerId,
                    ans.engineerEmail,
                    ans.engineerGithub,
                );
                team.push(engineer)
                engQ();
            } else if(ans.selection==="Intern"){
                intQ();
            } else {
                fs.writeFile(`./output/index.html`, generateHtml(team), (err,data) => {
                    if (err) {
                        throw err
                    }
                    console.log('success!')
                })
            }
        })
    }
function intQ(){
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the team intern's name?",
            name: 'internName',
        },
        {
            type: 'input',
            message: "What is the team intern's id?",
            name: 'internId',
        },
        {
            type: 'input',
            message: "What is the team intern's email?",
            name: 'internEmail',
        },
        {
            type: 'input',
            message: "What is the team intern's school?",
            name: 'internSchool',
        },
        {
            type: 'list',
            choices: ['Engineer', 'Intern', 'Done adding employees'],
            message: 'Do you want to add employee data?',
            name: 'selection'
        },
    ]).then(ans => {
        const intern = new Intern(
            ans.internName,
            ans.internId,
            ans.internEmail,
            ans.internSchool
            );
            team.push(intern)
            if(ans.selection==="Engineer"){
                engQ();
            } else if(ans.selection==="Intern"){
                intQ();
            } else {
                fs.writeFile(`./output/index.html`, generateHtml(team), (err,data) => {
                    if (err) {
                        throw err
                    }
                    console.log('success!')
                    console.log('goodbye')
                })
            }
        })
    }
start();