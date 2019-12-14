class Point {
  constructor(x, y) {
    [this.x, this.y] = [x, y];
  }

  toString() {
    return `Point @(${this.x},${this.y})`;
  }

  visit(functionREf) {
    return functionREf(this.x, this.y);
  }

  clone() {
    return new Point(this.x, this.y);
  }
}

module.exports = Point;
