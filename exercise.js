class Square {
  constructor(side) {
    this.side = side;
  }
  area() {
    return Math.pow(this.side, 2);
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class AreaCalculator {
  static calculate(figure) {
    if(figure instanceof Square) {
      return figure.area();
    } else if(figure instanceof Rectangle) {
      return figure.area();
    } else if(figure instanceof Circle) {
      return figure.area();
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));