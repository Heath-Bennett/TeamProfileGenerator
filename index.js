const inquirer = require("inquirer");
const fs = require('fs');
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
                case 'Done':
                    createFile();
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
<!DOCTYPE html>
<html lang="en-us">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/00f36c2501.js" crossorigin="anonymous"></script>
        <link rel='stylesheet' href='./style.css'>
    </head>

    <body>
        <header>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 text-center">
                        <h1>My Team</h1>
                    </div>
                </div>
            </div>
        </header>
        
        <main>
            <div class="container space">
                <div class="row justify-content-start">
                    ${managerCardContainer()}
                    ${engineerCardContainer()}
                    ${internCardContainer()}
            </div>
        </main>
            
    </body>

</html>
`;


const managerCard = (element) => {
    return `            
                    <div class="col-4">     
                        <div class="card padd" style="width: 18rem;">
                        <div class="card-header orange">
                            <h3>${element.name}</h3>
                            <h4><i class="fas fa-mug-hot"></i> Manager</h4>
                        </div>
                        <div class="card-body yellowred">
                            <p class="card-text">ID: ${element.id}</p>
                            <p>Email: <a href="mailto:${element.email}">${element.email}</a></p>
                            <p class="card-text">Office Number: ${element.officeNumber}</p>
                        </div>
                        </div>
                    </div>    
    `
}

const managerCardContainer = () => {
    let cardContainer = '';
    managerArray.forEach((element) => {
        cardContainer += managerCard(element);
    });

    return cardContainer;
}

const engineerCard = (element) => {
    return `            
                    <div class="col-4">     
                        <div class="card padd" style="width: 18rem;">
                        <div class="card-header orange">
                            <h3>${element.name}</h3>
                            <h4><i class="fas fa-glasses"></i> Engineer</h4>
                        </div>
                        <div class="card-body yellowred">
                            <p class="card-text">ID: ${element.id}</p>
                            <p>Email: <a href="mailto:${element.email}">${element.email}</a></p>
                            <p>GitHub: <a href="https://github.com/${element.github}" target="_blank">${element.github}</a></p>
                        </div>
                        </div>
                    </div>    
    `
}

const engineerCardContainer = () => {
    let cardContainer = '';
    engineerArray.forEach((element) => {
        cardContainer += engineerCard(element);
    });
    
    return cardContainer;
}

const internCard = (element) => {
    return `            
                    <div class="col-4">     
                        <div class="card padd" style="width: 18rem;">
                        <div class="card-header orange">
                            <h3>${element.name}</h3>
                            <h4><i class="fas fa-graduation-cap"></i> Intern</h4>
                        </div>
                        <div class="card-body yellowred">
                            <p class="card-text">ID: ${element.id}</p>
                            <p>Email: <a href="mailto:${element.email}">${element.email}</a></p>
                            <p class="card-text">School: ${element.school}</p>
                        </div>
                        </div>
                    </div>    
    `
}

const internCardContainer = () => {
    let cardContainer = '';
    internArray.forEach((element) => {
        cardContainer += internCard(element);
    });
    
    return cardContainer;
}


const createFile = () => {
    fs.writeFile('./team.html', createPage(), (err) => {
        err ? console.log(err, 'error') : console.log('*****************SUCCESS! Page created****************')
    });
}

whatPosition();


