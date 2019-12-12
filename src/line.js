const arePointsEqual = function(pointA, pointB) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

class Line {
  constructor(start, end) {
    this.start = { ...start };
    this.end = { ...end };
  }

  toString() {
    const strForm = `Line: (${this.start.x},${this.start.y})----(${this.end.x},${this.end.y})`;
    return strForm;
  }

  isEqualTo(anotherLine) {
    const matchType = anotherLine instanceof Line;

    const matchProperty =
      arePointsEqual(this.start, anotherLine.start) &&
      arePointsEqual(this.end, anotherLine.end);

    return matchProperty && matchType;
  }
}

module.exports = Line;
