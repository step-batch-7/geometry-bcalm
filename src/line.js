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
    const length = Math.sqrt(dx * dx + dy * dy);
    return length;
  }

  get slope() {
    const dx = this.end.x - this.start.x;
    const dy = this.end.y - this.start.y;
    return dy / dx;
  }

  isParallelTo(otherLine) {
    return otherLine instanceof Line && this.slope === otherLine.slope;
  }
}

module.exports = Line;
