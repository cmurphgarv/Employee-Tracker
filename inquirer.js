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
    ])
}
