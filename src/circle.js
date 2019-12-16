const Point = require("./point.js");

class Circle {
  constructor(center, radius) {
    [this.center, this.radius] = [new Point(center.x, center.y), radius];
  }

  toString() {
    const center = `(${this.center.x},${this.center.y})`;
    return `[Circle @${center} radius ${this.radius}]`;
  }
}

module.exports = Circle;
