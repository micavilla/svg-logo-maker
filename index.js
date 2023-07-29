// import  inquirer, shape classes, and fs
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes')
const fs = require('fs');

// triggers inquirer prompt questions
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: "Enter up to three characters for your logo's text.",
      // prevents more than 3 characters for text input
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
      message: "What color would like your logo's text to be? (Hexadecimal numbers are also accepted.)",
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: "What color would you like your logo's background to be? (Hexadecimal numbers are also accepted.)",
    },
    {
      type: 'list',
      name: 'shape',
      message: 'What shape do you want your logo to be?',
      choices: ['circle', 'triangle', 'square'],
    },
  ])
  // creates new objects from shape classes with user input for parameters
  .then((data) => {
    let shape;
    if (data.shape === 'circle') {
      shape = new Circle(data.shapeColor, data.textColor, data.text.toUpperCase())
    } if (data.shape === 'triangle') {
      shape = new Triangle(data.shapeColor, data.textColor, data.text.toUpperCase())
    } if (data.shape === 'square') {
      shape = new Square(data.shapeColor, data.textColor, data.text.toUpperCase())
    }
    // calls render function from shape classes to create and write in svg file
    fs.writeFile("./examples/logo.svg", shape.render(), (err, result)=>{
      if (err) throw err;
      console.log('Generated logo.svg');
    });
  });