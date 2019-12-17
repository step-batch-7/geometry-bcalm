const Point = require("./point.js");

class Circle {
  constructor(centre, radius) {
    [this.centre, this.radius] = [new Point(centre.x, centre.y), radius];
    Object.defineProperties(this, {
      centre: { writable: false },
      radius: { writable: false }
    });
  }

  toString() {
    const centre = `(${this.centre.x},${this.centre.y})`;
    return `[Circle @${centre} radius ${this.radius}]`;
  }

  isEqualTo(other) {
    if (!(other instanceof Circle)) return false;
    return this.centre.isEqualTo(other.centre) && this.radius === other.radius;
  }

  get area() {
    return Math.ceil(Math.PI * this.radius ** 2);
  }

  get perimeter() {
    return Math.ceil(2 * Math.PI * this.radius);
  }

  hasPoint(other) {
    if (!(other instanceof Point)) return false;
    return this.centre.findDistanceTo(other) === this.radius;
  }

  covers(other) {
    if (!(other instanceof Point)) return false;
    return this.centre.findDistanceTo(other) < this.radius;
  }

  moveTo(other) {
    return new Circle(other, this.radius);
  }
}

module.exports = Circle;
