const Point = require("./point.js");

class Circle {
  constructor(center, radius) {
    [this.center, this.radius] = [new Point(center.x, center.y), radius];
  }

  toString() {
    const center = `(${this.center.x},${this.center.y})`;
    return `[Circle @${center} radius ${this.radius}]`;
  }

  isEqualTo(other) {
    if (!(other instanceof Circle)) return false;
    return this.center.isEqualTo(other.center) && this.radius === other.radius;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }

  get perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

module.exports = Circle;
