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
    const dx = this.start.x - this.end.x;
    const dy = this.start.y - this.end.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    return length;
  }

  get slope() {
    const dx = this.start.x - this.end.x;
    const dy = this.start.y - this.end.y;
    return dy / dx;
  }

  isParallelTo(otherLine) {
    const slope1 = this.slope;
    const slope2 = otherLine.slope;
    return slope1 === slope2;
  }
}

module.exports = Line;
