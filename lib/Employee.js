const inquirer = require("inquirer");
class Employee {

    constructor(name, id, email, position) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.position = position;

        console.log("name = " + this.name);
    }

    getName() {
        
        return this.name;
    }
    
    getId(){
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }

    getPosition(){
        return this.position;
    }
}


module.exports = Employee;