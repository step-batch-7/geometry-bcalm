const Point = require("./point.js");
const Line = require("./line.js");

const getAnotherDiagonal = function(pointA, pointC) {
  return [new Point(pointA.x, pointC.y), new Point(pointC.x, pointA.y)];
};

class Rectangle {
  constructor(pointA, pointC) {
    this.pointA = new Point(pointA.x, pointA.y);
    this.pointC = new Point(pointC.x, pointC.y);
    Object.defineProperties(this, {
      pointA: { writable: false },
      pointC: { writable: false }
    });
  }

  toString() {
    return `[Rectangle (${this.pointA.x},${this.pointA.y}) to (${this.pointC.x},${this.pointC.y})]`;
  }

  get area() {
    const length = this.pointA.x - this.pointC.x;
    const width = this.pointA.y - this.pointC.y;
    return Math.abs(length * width);
  }

  get perimeter() {
    const length = this.pointA.x - this.pointC.x;
    const width = this.pointA.y - this.pointC.y;
    return 2 * (Math.abs(length) + Math.abs(width));
  }

  isEqualTo(other) {
    if (this === other) return true;
    if (!(other instanceof Rectangle)) return false;
    return (
      this.pointA.isEqualTo(other.pointA) && this.pointC.isEqualTo(other.pointC)
    );
  }

  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    const [pointB, pointD] = getAnotherDiagonal(this.pointA, this.pointC);
    const AB = new Line(this.pointA, pointB);
    const BC = new Line(pointB, this.pointC);
    const CD = new Line(this.pointC, pointD);
    const DA = new Line(pointD, this.pointA);
    return [AB, BC, CD, DA].some(line => point.isOn(line));
  }

  covers(other) {
    if (!(other instanceof Point)) return false;
    const [xMin, xMax] = [this.pointA.x, this.pointC.x].sort((x, y) => x - y);
    const [yMin, yMax] = [this.pointA.y, this.pointC.y].sort((x, y) => x - y);
    return (
      other.x >= xMin && other.x <= xMax && other.y >= yMin && other.y <= yMax
    );
  }
}

module.exports = Rectangle;
