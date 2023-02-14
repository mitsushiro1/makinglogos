const { Triangle, Circle, Square } = require('../lib/shapes.js');


describe('Triangle class', () => {
  let triangle;
  
  beforeEach(() => {
    triangle = new Triangle();
  });
  
  it('should set it to its correct color', () => {
    triangle.setColor('red');
    expect(triangle.shapeColor).toBe('red');
  });
  
  it('should generate the correct SVG code', () => {
    triangle.setColor('red');
    expect(triangle.toSvg()).toBe('<polygon points= "150,20 295,180 5,180" fill="red"/>');
  });
});

describe('Square class', () => {
  let square;
  
  beforeEach(() => {
    square = new Square();
  });
  
  it('should set the color correctly', () => {
    square.setColor('blue');
    expect(square.shapeColor).toBe('blue');
  });
  
  it('should generate the correct SVG code', () => {
    square.setColor('blue');
    expect(square.toSvg()).toBe('<rect x="50" y="50" width="200" height="100" fill="blue"/>');
  });
});

describe('Circle class', () => {
  let circle;
  
  beforeEach(() => {
    circle = new Circle();
  });
  
  it('should set the color correctly', () => {
    circle.setColor('green');
    expect(circle.shapeColor).toBe('green');
  });
  
  it('should generate the correct SVG code', () => {
    circle.setColor('green');
    expect(circle.toSvg()).toBe('<circle cx="150" cy="100" r="75" fill="green"/>');
  });
});