const Point = require("./point.js");

const arePointsEqual = function(pointA, pointB) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

const areCollinear = function(pointA, pointB, pointC) {
  const [x1, y1] = [pointA.x, pointA.y];
  const [x2, y2] = [pointB.x, pointB.y];
  const [x3, y3] = [pointC.x, pointC.y];
  return x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) == 0;
};

const isNumberNotInRange = function(range, number) {
  const [bottomLim, topLim] = range.sort((x, y) => x - y);
  return number < bottomLim || number > topLim;
};

class Line {
  constructor(start, end) {
    this.start = { x: start.x, y: start.y };
    this.end = { x: end.x, y: end.y };
  }

  toString() {
    const start = `${this.start.x},${this.start.y}`;
    const end = `${this.end.x},${this.end.y}`;
    return `[Line (${start}) to (${end})]`;
  }

  isEqualTo(other) {
    if (!(other instanceof Line)) return false;

    return (
      (arePointsEqual(this.start, other.start) &&
        arePointsEqual(this.end, other.end)) ||
      (arePointsEqual(this.end, other.start) &&
        arePointsEqual(this.start, other.end))
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

  isParallelTo(other) {
    if (!(other instanceof Line) || this === other) return false;
    if (areCollinear(this.start, this.end, other.start)) return false;
    return this.slope === other.slope;
  }

  findX(ordinate) {
    if (isNumberNotInRange([this.start.y, this.end.y], ordinate)) return NaN;
    if (this.slope === 0) return this.start.x;
    return (ordinate - this.start.y) / this.slope + this.start.x;
  }

  findY(abscissa) {
    if (isNumberNotInRange([this.start.x, this.end.x], abscissa)) return NaN;
    if ([Infinity, -Infinity].includes(this.slope)) return this.start.y;
    return this.slope * (abscissa - this.start.x) + this.start.y;
  }

  hasPoint(other) {
    if (!(other instanceof Point)) return false;
    return other.x === this.findX(other.y) || other.y === this.findY(other.x);
  }

  split() {
    const midXPoint = (this.start.x + this.end.x) / 2;
    const midYPoint = (this.start.y + this.end.y) / 2;
    const midPoint = { x: midXPoint, y: midYPoint };
    return [
      new Line({ ...this.start }, { ...midPoint }),
      new Line({ ...midPoint }, { ...this.end })
    ];
  }

  findPointFromStart(distance) {
    if (!Number.isInteger(distance) || distance > this.length || distance < 0)
      return null;
    const ratio = distance / this.length;
    const [x, y] = [
      (1 - ratio) * this.start.x + ratio * this.end.x,
      (1 - ratio) * this.start.y + ratio * this.end.y
    ];
    return new Point(x, y);
  }

  findPointFromEnd(distance) {
    return new Line(this.end, this.start).findPointFromStart(distance);
  }
}

module.exports = Line;
