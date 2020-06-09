const orm = require("../config/orm");
const express = require("express");
const app = express();

// Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

function init() {
    inquirer.prompt(questions)
        .then(answers => {
            writeToFile("readme.md", orm(answers))
        })
};

module.exports = init;