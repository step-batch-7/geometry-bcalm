const arePointsEqual = function(PointA, PointB) {
  return PointA.x === PointB.x && PointA.y === PointB.y;
};

class Point {
  constructor(x, y) {
    [this.x, this.y] = [x, y];
  }

  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }

  visit(functionREf) {
    return functionREf(this.x, this.y);
  }

  clone() {
    return new Point(this.x, this.y);
  }

  isEqualTo(other) {
    if (!(other instanceof Point)) return false;
    return arePointsEqual(this, other);
  }

  findDistanceTo(other) {
    if (!(other instanceof Point)) return NaN;
    const dx = other.x - this.x;
    const dy = other.y - this.y;
    return Math.hypot(dx, dy);
  }

  isOn(shape) {
    return shape.hasPoint(this);
  }
}

module.exports = Point;
