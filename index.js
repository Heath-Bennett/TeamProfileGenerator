const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// let role = "";

let managerArray =[];
let engineerArray = [];
let internArray = [];

const managerInfo = () => {
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

const engineerInfo = () => {
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

const internInfo = () => {
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

const whatPosition = () => {
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

const createPage = () =>
`
<DOCTYPE html>
<html lang="en-us">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
    </head>

    <body>
        <header>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12">
                        <h1>My Team</h1>
                    </div>
                </div>
                <div class="row align-items-start">
                    <div class="col-12> 
                        <h2>Managers:</h2>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-12> 
                        ${managerCardContainer()}
                    </div>
                </div>
                <div class="row align-items-start">
                    <div class="col-12> 
                        <h2>Engineers:</h2>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-12> 
                        ${engineerCardContainer()}
                    </div>
                </div>
                <div class="row align-items-start">
                    <div class="col-12> 
                        <h2>Interns:</h2>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-12> 
                        ${internCardContainer()}
                    </div>
                </div>
            </div>
        </header>
    </body>

</html>
`;


const managerCard = () => {
    return `<div class="card">
    <div class="card-header">
        <h3>${manager.name}</h3>
        <h4>Manager</h4>
    </div>
    <div class="card-body">
        <p class="card-text">ID: ${manager.id}</p>
        <p class="card-text">Email: ${manager.emailAdd}</p>
        <p class="card-text">Office Number: ${manager.officeNumber}</p>
    </div>
    </div>`
}

const managerCardContainer = () => {
    let cardContainer = '';
    managers.forEach(manager => {
        cardContainer += managerCard(manager);
    });

    return cardContainer;
}

whatPosition();


