const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: "Enter up to three characters for your logo's text.",
      validate: function(input) {
        if (input.length > 3) {
          console.log("\nMust enter a value of no more than 3 characters");
          return;
        } else {
          return true;
        }
    }},
    {
      type: 'input',
      name: 'textColor',
      message: "What color would like your logo's text to be?",
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: "What color would you like your logo's background to be?",
    },
    {
      type: 'list',
      name: 'shape',
      message: 'What shape do you want your logo to be?',
      choices: ['circle', 'triangle', 'square'],
    },
  ])