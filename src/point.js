const arePointsEqual = function(PointA, PointB) {
  return PointA.p1 === PointB.p1 && PointA.p2 === PointB.p2;
};

class Point {
  constructor(p1, p2) {
    [this.p1, this.p2] = [p1, p2];
  }

  toString() {
    return `Point @(${this.p1},${this.p2})`;
  }

  visit(functionREf) {
    return functionREf(this.p1, this.p2);
  }

  clone() {
    return new Point(this.p1, this.p2);
  }

  isEqualTo(other) {
    if (!(other instanceof Point)) return false;
    return arePointsEqual(this, other);
  }
}

module.exports = Point;
