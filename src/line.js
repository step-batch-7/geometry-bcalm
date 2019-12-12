class Line {
  constructor(firstPosition, secondPosition) {
    this.x1 = firstPosition[0];
    this.y1 = firstPosition[1];
    this.x2 = secondPosition[0];
    this.y2 = secondPosition[1];
  }

  createString() {
    return `Line start from ${this.x1},${this.y1} and ends with ${this.x2},${this.y2}`;
  }
  get toString() {
    return this.createString();
  }
}

module.exports = Line;
