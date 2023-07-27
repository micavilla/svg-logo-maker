const { Circle, Triangle, Square } = require("./shapes.js");
describe('Circle', () => {
  it('Should render a pink circle with SVG written in purple', () => {
    const shape = new Circle('pink', 'purple', 'SVG');
    expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="pink"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">SVG</text></svg>');
  });
});
describe('Triangle', () => {
  it('Should render a green triangle with POP written in blue', () => {
    const shape = new Triangle('green', 'blue', 'POP');
    expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="green"/><text x="150" y="150" font-size="60" text-anchor="middle" fill="blue">POP</text></svg>');
  });
});
describe('Square', () => {
  it('Should render a yellow square with OTW written in red', () => {
    const shape = new Square('yellow', 'red', 'OTW');
    expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="yellow"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">OTW</text></svg>');
  });
});
