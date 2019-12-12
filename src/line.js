class Line {
  constructor(firstPosition, secondPosition) {
    this.x1 = firstPosition[0];
    this.y1 = firstPosition[1];
    this.x2 = secondPosition[0];
    this.y2 = secondPosition[1];
  }

  toString() {
    return `Line start from (${this.x1},${this.y1}) and ends with (${this.x2},${this.y2})`;
  }

  isEqualTo(anotherLine) {
    return (
      this.x1 == anotherLine.x1 &&
      this.x2 == anotherLine.x2 &&
      this.y1 == anotherLine.y1 &&
      this.y2 == anotherLine.y2
    );
  }
}

module.exports = Line;
