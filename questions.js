// Package Imports
const inquirer = require('inquirer');

function questionMenu() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menuSelect',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
        },
    ]).then((answer) => {
       switch(answer) {
        case 'View All Employees':
            //function to load employees table
            //then go back to main menu
            break;
        case 'Add Employee':
            //function to add new employee to db (add their role, salary, etc)
            //then go back to main menu
            break;
        case 'Update Employee Role':
            //function to look up employee by ID/first name/last name and then edit their listed role in db
            //then go back to main menu
            break;
        case 'View All Roles':
            //load roles table
            //then go back to main menu
            break;
        case 'Add Role':
            //function to add new role to company_db
            // back to main menu
            break;
        case 'View All Departments':
            //function to load departments table
            //return to main menu
            break;
        case 'Add Department':
            //add department to company_db
            //return to main menu
            break;
        case 'Quit':
            //quit the program
       }
    });
}


module.exports = questions;