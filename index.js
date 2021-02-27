const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// let role = "";

let managerArray =[];
let engineerArray = [];
let internArray = [];

managerInfo = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the manager\'s name?',
            },
            {
                type: 'input', 
                name: 'id',
                message: 'What is the manager\'s ID number', 
            },
            {
                type: 'input', 
                name: 'emailAdd',
                message: 'What is the manager\'s email address?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the Manager\'s office number?',
            },
        ])
        .then(answers => {
            let mana = new Manager(answers.name, answers.id, answers.emailAdd, answers.officeNumber);
            managerArray.push(mana);
            console.log(managerArray);
            managerArray.forEach(manager =>{console.log(manager.name + " " + manager.id)});
            whatPosition();
        })
        .catch(error => {
            if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
                console.log(error);
            } else {
        // Something else went wrong
                console.log(error);
        }
        });
}

engineerInfo = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the engineer\'s name?',
            },
            {
                type: 'input', 
                name: 'id',
                message: 'What is the engineer\'s ID number', 
            },
            {
                type: 'input', 
                name: 'emailAdd',
                message: 'What is the engineer\'s email address?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the engineer\'s GitHub username?',
            },
        ])
        .then(answers => {
            let eng = new Engineer(answers.name, answers.id, answers.emailAdd, answers.github);
            engineerArray.push(eng);
            console.log(engineerArray);
            engineerArray.forEach(engineer =>{console.log(engineer.name + " " + engineer.id)});
            whatPosition();
        })
        .catch(error => {
            if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
                console.log(error);
            } else {
        // Something else went wrong
                console.log(error);
        }
        });
}

internInfo = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the intern\'s name?',
            },
            {
                type: 'input', 
                name: 'id',
                message: 'What is the intern\'s ID number', 
            },
            {
                type: 'input', 
                name: 'emailAdd',
                message: 'What is the intern\'s email address?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the name of the intern\'s school?',
            },
        ])
        .then(answers => {
            let tern = new Intern(answers.name, answers.id, answers.emailAdd, answers.school);
            internArray.push(tern);
            console.log(internArray);
            internArray.forEach(intern =>{console.log(intern.name + " " + intern.id)});
            whatPosition();
        })
        .catch(error => {
            if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
                console.log(error);
            } else {
        // Something else went wrong
                console.log(error);
        }
        });
}

whatPosition = () => {
    inquirer
        .prompt([
        /* Pass your questions in here */
        
        {
            type: 'list',
            name: 'position',
            message: 'What position would you like to add?',
            choices: ['Manager', 'Engineer', 'Intern', 'Done'],
        },
        ])
        .then(answers => {

            switch (answers.position) {
                case 'Manager':
                    managerInfo();
                    break;
                case 'Engineer':
                    engineerInfo();
                    break;
                case 'Intern':
                    internInfo();
                    break;
                case 'done':
                    createPage();
            }
        })
        .catch(error => {
            if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
                console.log(error);
            } else {
        // Something else went wrong
                console.log(error);
        }
        });
}

whatPosition();


