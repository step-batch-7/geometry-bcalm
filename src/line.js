const arePointsEqual = function(pointA, pointB) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

class Line {
  constructor(start, end) {
    this.start = { x: start.x, y: start.y };
    this.end = { x: end.x, y: end.y };
  }

  toString() {
    return `Line: (${this.start.x},${this.start.y})----(${this.end.x},${this.end.y})`;
  }

  isEqualTo(anotherLine) {
    const isSameType = anotherLine instanceof Line;
    return (
      isSameType &&
      arePointsEqual(this.start, anotherLine.start) &&
      arePointsEqual(this.end, anotherLine.end)
    );
  }
}

module.exports = Line;
