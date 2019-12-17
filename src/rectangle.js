const Point = require("./point.js");

class Rectangle {
  constructor(pointA, pointB) {
    [this.pointA, this.pointB] = [pointA, pointB];
  }

  toString() {
    return `[Rectangle (${this.pointA.x},${this.pointA.y}) to (${this.pointB.x},${this.pointB.y})]`;
  }

  get area() {
    const length = this.pointA.x - this.pointB.x;
    const width = this.pointA.y - this.pointB.y;
    return Math.abs(length * width);
  }

  get perimeter() {
    const length = this.pointA.x - this.pointB.x;
    const width = this.pointA.y - this.pointB.y;
    return 2 * (Math.abs(length) + Math.abs(width));
  }
}

module.exports = Rectangle;
