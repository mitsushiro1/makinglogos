class Shape {
    constructor(){
      this.shapeColor = "";

    } 
    setColor(color){
      this.shapeColor = color;
    }
   
}
class Triangle extends Shape {
  constructor() {
    super();
  }
  
    toSvg() {
      return `<polygon points= "150,20 295,180 5,180" fill="${this.shapeColor}"/>`;
    }
  }
  
  class Square extends Shape {
    constructor() {
      super();
    } 
    toSvg() {
    
      return `<rect x="50" y="50" width="200" height="100" fill="${this.shapeColor}"/>`;
    }
  }
  
  class Circle extends Shape {
    constructor() {
      super();
    }
    toSvg() {
      return `<circle cx="150" cy="100" r="75" fill="${this.shapeColor}"/>`;
    }
  }
  const shapes = [new Triangle(), new Square(), new Circle()];
  shapes.forEach(shape => shape.setColor("red"));
  const text = "Hello";
const textColor = "black";
  
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">${shapes.map(shape => shape.toSvg()).join('')}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;

  console.log(svg);

  module.exports = { Triangle, Circle, Square };


