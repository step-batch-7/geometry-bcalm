const Point = require("./point.js");

class Rectangle {
  constructor(pointA, pointB) {
    [this.pointA, this.pointB] = [pointA, pointB];
  }

  toString() {
    return `[Rectangle (${this.pointA.x},${this.pointA.y}) to (${this.pointB.x},${this.pointB.y})]`;
  }
}

module.exports = Rectangle;
