const inquirer = require('inquirer');

 const fs = require("fs");

 const shapesJs = require("./lib/shapes.js");

const questions = [
    {
        type: "input",
        message: "type in up to 3 text",
        name: "text",
    },
    {
        type: "input",
        message: "type in the color of text you want",
        name: "textColor",
    },
    {
        type: "list",
        message: "what shape do you want",
        choices: ["circle", "triangle", "square"],
        name: "shapes",
    },
    {
        type: "input",
        message: "what color do you want the shape to be",
        name: "shapeColor",
    }

]


const shapesJs = [
    new Triangle ())
    new Square(),
    new Circle(),
  ];
  

  
  console.log(svg);


function init() {
    inquirer.prompt(questions)
        .then(({
            text,
            textColor,
            shapes,
            shapeColor,

        }) => { 
            console.log(response)
             var callvariable = shapesJs(response);
        //     console.log(callvariable)


              fs.writeFile("logo.svg", callvariable, (err)=> err ? console.log(err): "success")
        // })
})};

init();