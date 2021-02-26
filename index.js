const Employee = require("./lib/Employee");
const Engineer = require(',/lib/Engineer');
const Intern = require(',/lib/Intern');
const Manager = require(',/lib/Manager');

const emp1 = new Employee("Mason", 1, "Mason@littleBuddy.com");
const emp2 = new Employee("Tucker", 2, "tucker@doodle.dog");
const emp3 = new Employee("Oreo", 3, "Oreo@cookie.com");

console.log('doing ok so far');

const promptInfo = [
    {
        type: 'input', 
        name: 'name', 
        message: 'What is the employee\'s name?',    
    },
    {
        type: 'input',
        name: 'id',
        message: 'what is the employee\'s id number?', 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employee\'s email address?',
    },
    {
        type: 'list',
        name: 'position',
        message: 'What is the employee\'s position?',
        choices: ['Engineer', 'Manager', 'Intern'],
    },
];
