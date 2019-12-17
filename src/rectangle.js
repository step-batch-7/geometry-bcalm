const Point = require("./point.js");
const Line = require("./line.js");

class Rectangle {
  #pointB;
  #pointD;
  constructor(pointA, pointC) {
    this.pointA = new Point(pointA.x, pointA.y);
    this.#pointB = new Point(pointA.x, pointC.y);
    this.pointC = new Point(pointC.x, pointC.y);
    this.#pointD = new Point(pointC.x, pointA.y);
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
    const AB = new Line(this.pointA, this.#pointB);
    const BC = new Line(this.#pointB, this.pointC);
    const CD = new Line(this.pointC, this.#pointD);
    const DA = new Line(this.#pointD, this.pointA);
    return point.isOn(AB) || point.isOn(BC) || point.isOn(CD) || point.isOn(DA);
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
