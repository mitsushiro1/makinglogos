class Shape {
    constructor(){
      this.shapeColor = "";

    } 
    setColor(color){
      this.shapeColor = color;
    }
   
}
class Triangle extends Shape {
  
  
    toSvg() {
      //"${this.x},${this.y} ${this.x + this.base},${this.y} ${this.x + this.base / 2},${this.y - this.height}
      return `<polygon points= "" fill="${this.shapeColor}"/>`;
    }
  }
  
  class Square extends Shape {
    
  
    toSvg() {
      //"${this.x}" y="${this.y}" width="${this.side }" height="${this.side}"
      return `<rectx= fill="${this.shapeColor}"/>`;
    }
  }
  
  class Circle extends Shape {
   
  
    toSvg() {
      //cx="${this.x}" cy="${this.y}" r="${this.radius}" 
      return `<circle fill="${this.shapeColor}"/>`;
    }
  }

//   function shapes(response){
//     return`
    
//     `
//   }
  
  const shapes = [
    new Triangle(10, 10, 'red', 20, 30),
    new Square(30, 30, 'blue', 40),
    new Circle(50, 50, 'green', 15),
  ];

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">${shapes.map(shape => shape.toSvg()).join('')}</svg><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;

  console.log(svg);

  modeule.export = {
    Triangle
    Circle
    Square
  }

// <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
//     <circle cx="150" cy="100" r="80" fill="green"></circle>
//     <text x="150" y="125" font-size="60" text-anchor="middle" fill="white"></text>
// </svg>

