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
    return (
      arePointsEqual(this.start, anotherLine.start) &&
      arePointsEqual(this.end, anotherLine.end)
    );
  }
}

module.exports = Line;
