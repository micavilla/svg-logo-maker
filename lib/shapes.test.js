const { Circle, Triangle, Square } = require("./shapes.js");

// tests full output of a new circle object
describe('Circle', () => {
  it('Should render a pink circle with SVG written in purple', () => {
    const circle = new Circle('pink', 'purple', 'SVG');
    expect(circle.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="pink"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">SVG</text></svg>');
  });
});
// tests text color for new triangle object
describe('Triangle', () => {
  it('Should render a triangle with green text', () => {
    const triangle = new Triangle('pink', 'green', 'POP');
    expect(triangle.textColor).toEqual('green');
  });
});
// tests shape color for new square object
describe('Square', () => {
  it('Should render a yellow square', () => {
    const square = new Square('yellow', 'red', 'OTW');
    expect(square.shapeColor).toEqual('yellow');
  });
});