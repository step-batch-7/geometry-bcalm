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

  isParallelTo(otherLine) {
    return otherLine instanceof Line && this.slope === otherLine.slope;
  }

  findX(y) {
    const m = this.slope;
    const y1 = this.start.y;
    const x1 = this.start.x;
    return (y - y1 + m * x1) / m;
  }
}

module.exports = Line;
