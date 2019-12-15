const Point = require("./point.js");

const arePointsEqual = function(pointA, pointB) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

class Line {
  constructor(start, end) {
    this.start = { x: start.x, y: start.y };
    this.end = { x: end.x, y: end.y };
  }

  toString() {
    const start = `${this.start.x},${this.start.y}`;
    const end = `${this.end.x},${this.end.y}`;
    return `Line: (${start})----(${end})`;
  }

  isEqualTo(other) {
    if (!(other instanceof Line)) return false;
    return (
      arePointsEqual(this.start, other.start) &&
      arePointsEqual(this.end, other.end)
    );
  }

  get length() {
    const dx = this.end.x - this.start.x;
    const dy = this.end.y - this.start.y;
    return Math.hypot(dx, dy);
  }

  get slope() {
    const dx = this.end.x - this.start.x;
    const dy = this.end.y - this.start.y;
    return dy / dx;
  }

  hasPoint(other) {
    if (!(other instanceof Point)) return false;
    return other.x === this.findX(other.y) || other.y === this.findY(other.x);
  }

  isParallelTo(other) {
    if (!(other instanceof Line) || this === other || this.isEqualTo(other))
      return false;
    if (this.hasPoint(other.start) || other.hasPoint(this.start)) return false;
    return other instanceof Line && this.slope === other.slope;
  }

  findX(ordinate) {
    if (this.end.y < ordinate || ordinate < this.start.y) return NaN;
    if (this.slope === 0) return this.start.x;
    return (ordinate - this.start.y + this.slope * this.start.x) / this.slope;
  }

  findY(abscissa) {
    if (this.end.x < abscissa || abscissa < this.start.x) return NaN;
    if ([Infinity, -Infinity].includes(this.slope)) return this.start.y;
    return this.slope * (abscissa - this.start.x) + this.start.y;
  }

  split() {
    const midXPoint = (this.start.x + this.end.x) / 2;
    const midYPoint = (this.start.y + this.end.y) / 2;
    const midPoint = { x: midXPoint, y: midYPoint };
    const firstLine = new Line({ ...this.start }, { ...midPoint });
    const secondLine = new Line({ ...midPoint }, { ...this.end });
    return [firstLine, secondLine];
  }
}

module.exports = Line;
