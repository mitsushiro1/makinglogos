const inquirer = require('inquirer');
const fs = require("fs");
const { Triangle, Circle, Square } = require('./lib/shapes.js');

const questions = [
  {
    type: "input",
    message: "Type in up to 3 text",
    name: "text",
    validate: input => {
      if (input.length <= 3) {
        return true;
      } else {
        return "No more than 3 letters";
      }
    }
  },
  {
    type: "input",
    message: "Type in the color of text you want",
    name: "textColor",
  },
  {
    type: "list",
    message: "What shape do you want",
    choices: ["circle", "triangle", "square"],
    name: "shape",
  },
  {
    type: "input",
    message: "What color do you want the shape to be",
    name: "shapeColor",
  }
];

let shapes = [];

function generateSvg(answers) {
  shapes.forEach(shape => shape.setColor(answers.shapeColor));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">${shapes.map(shape => shape.toSvg()).join('')}<text x="150" y="115" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text></svg>`;
  fs.writeFile('logo.svg', svg, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

function init() {
  inquirer.prompt(questions).then(answers => {
    switch (answers.shape) {
      case "circle":
        shapes.push(new Circle());
        break;
      case "triangle":
        shapes.push(new Triangle());
        break;
      case "square":
        shapes.push(new Square());
        break;
    }
    generateSvg(answers);
  });
}

init();