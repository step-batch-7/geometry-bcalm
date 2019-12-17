const Point = require("./point.js");

class Rectangle {
  constructor(pointA, pointB) {
    this.pointA = new Point(pointA.x, pointA.y);
    this.pointB = new Point(pointB.x, pointB.y);
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

  isEqualTo(other) {
    if (this === other) return true;
    if (!(other instanceof Rectangle)) return false;
    return (
      this.pointA.isEqualTo(other.pointA) && this.pointB.isEqualTo(other.pointB)
    );
  }
}

module.exports = Rectangle;
