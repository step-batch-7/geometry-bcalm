const assert = require("chai").assert;
const Line = require("../src/line.js");
const Point = require("../src/point.js");

describe("Line", () => {
  describe("#toString", () => {
    it("String representation of line object", () => {
      const a = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actual = a.toString();
      const expected = "[Line (1,2) to (3,4)]";
      assert.strictEqual(actual, expected);
    });
  });

  describe("#isEqualTo", () => {
    it("Two lines have same ends points are equal ", () => {
      const a = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const b = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.isTrue(a.isEqualTo(b));
    });

    it("Two lines haven't same ends points aren't equal", () => {
      const a = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const b = new Line({ x: 1, y: 2 }, { x: 3, y: 3 });
      assert.isFalse(a.isEqualTo(b));
    });

    it("Line have different instance aren't equal", () => {
      const a = new Line({ x: 1, y: 2 }, { x: 3, y: 3 });
      const b = { start: { x: 1, y: 2 }, end: { x: 3, y: 3 } };
      assert.isFalse(a.isEqualTo(b));
    });

    it("should validate if points of lines are swapped", () => {
      const line = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      const otherLine = new Line({ x: 1, y: 1 }, { x: 0, y: 0 });
      assert.isTrue(line.isEqualTo(otherLine));
    });
  });

  describe("#length", () => {
    it("Should give length of line for positive points", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 4, y: 6 });
      assert.strictEqual(line.length, 5);
    });

    it("Should give length of line for negative points", () => {
      const line = new Line({ x: -1, y: -2 }, { x: 2, y: 2 });
      assert.strictEqual(line.length, 5);
    });

    it("Should give length of line for floating points", () => {
      const line = new Line({ x: 3, y: 2 }, { x: 7, y: 8 });
      assert.approximately(line.length, 7.21, 0.1);
    });

    it("Should give zero if coordinates are same", () => {
      const line = new Line({ x: 3, y: 2 }, { x: 3, y: 2 });
      assert.strictEqual(line.length, 0);
    });
  });

  describe("#slope", () => {
    it("should give slope of line for positive integer", () => {
      const line = new Line({ x: 3, y: 2 }, { x: 6, y: 5 });
      assert.strictEqual(line.slope, 1);
    });

    it("should give slope for negative integer", () => {
      const line = new Line({ x: -3, y: -2 }, { x: -6, y: -5 });
      assert.strictEqual(line.slope, 1);
    });

    it("should give NaN if length of line is zero", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 1, y: 1 });
      assert.isNaN(line.slope);
    });

    it("should give zero if line is parallel to x-axis", () => {
      const line = new Line({ x: 5, y: 3 }, { x: 7, y: 3 });
      assert.strictEqual(line.slope, 0);
    });

    it("should give infinity if line is parallel to y- axis", () => {
      let line = new Line({ x: 3, y: 1 }, { x: 3, y: 4 });
      assert.strictEqual(line.slope, Infinity);

      line = new Line({ x: 3, y: 4 }, { x: 3, y: 1 });
      assert.strictEqual(line.slope, Infinity);
    });

    it("should give slope for floating numbers", () => {
      const line = new Line({ x: 1.2, y: 2.3 }, { x: 2.4, y: 3.5 });
      assert.approximately(line.slope, 1, 0.1);
    });
  });

  describe("#isParallelTo", () => {
    it("Two lines have same slope are parallel", () => {
      const line = new Line({ x: 3, y: 2 }, { x: 6, y: 5 });
      const otherLine = new Line({ x: 5, y: 9 }, { x: 8, y: 12 });
      assert.isTrue(line.isParallelTo(otherLine));
    });

    it("should invalidate if two lines overlapped", () => {
      const line = new Line({ x: 3, y: 2 }, { x: 6, y: 5 });
      const otherLine = new Line({ x: 5, y: 4 }, { x: 8, y: 7 });
      assert.isFalse(line.isParallelTo(otherLine));
    });

    it("should invalidate if two lines are collinear", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 5, y: 5 });
      const otherLine = new Line({ x: 6, y: 6 }, { x: 7, y: 7 });
      assert.isFalse(line.isParallelTo(otherLine));
    });

    it("Two lines haven't same slope are not parallel", () => {
      const line = new Line({ x: 3, y: 2 }, { x: 6, y: 5 });
      const otherLine = new Line({ x: 3, y: 2 }, { x: 6, y: 3 });
      assert.isFalse(line.isParallelTo(otherLine));
    });

    it("Two lines have different instance are not parallel", () => {
      const line = new Line({ x: 3, y: 2 }, { x: 6, y: 5 });
      const otherLine = { start: { x: 3, y: 2 }, end: { x: 6, y: 5 } };
      assert.isFalse(line.isParallelTo(otherLine));
    });

    it("should invalidate if both lines are same", () => {
      const line = new Line({ x: 1, y: 3 }, { x: 4, y: 3 });
      const actual = line.isParallelTo(line);
      assert.isFalse(actual);
    });

    it("should validate if both lines has infinity slope but lines are not collinear", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 1, y: 5 });
      const otherLine = new Line({ x: 3, y: 2 }, { x: 3, y: 5 });
      assert.isTrue(line.isParallelTo(otherLine));
    });

    it("should invalidate if both lines have same coordinates", () => {
      const line = new Line({ x: 1, y: 3 }, { x: 4, y: 3 });
      const other = new Line({ x: 1, y: 3 }, { x: 4, y: 3 });
      const actual = line.isParallelTo(other);
      assert.isFalse(actual);
    });
  });

  describe("#findX", function() {
    it("should give abscissa value for given ordinate", () => {
      let line = new Line({ x: 3, y: 2 }, { x: 6, y: 5 });
      assert.strictEqual(line.findX(3), 4);

      line = new Line({ x: 6, y: 5 }, { x: 3, y: 2 });
      assert.strictEqual(line.findX(3), 4);
    });

    it("should give abscissa value if given ordinate is the starting point of line", () => {
      const line = new Line({ x: 3, y: 2 }, { x: 6, y: 5 });
      assert.strictEqual(line.findX(2), 3);
    });

    it("should give start abscissa value if line is parallel to x-axis", () => {
      const line = new Line({ x: 3, y: 1 }, { x: 6, y: 1 });
      assert.strictEqual(line.findX(1), 3);
    });

    it("should give NaN if given y is outside the line segment", () => {
      const line = new Line({ x: 3, y: 2 }, { x: 6, y: 5 });
      assert.isNaN(line.findX(7));
    });
  });

  describe("#findY", () => {
    it("should give ordinate value for given abscissa", () => {
      const line = new Line({ x: 3, y: 2 }, { x: 6, y: 5 });
      assert.strictEqual(line.findY(4), 3);
    });

    it("should give ordinate value if given abscissa is the starting point of line", () => {
      const line = new Line({ x: 3, y: 2 }, { x: 6, y: 5 });
      assert.strictEqual(line.findY(3), 2);
    });

    it("should give start ordinate value if line is parallel to y-axis", () => {
      const line = new Line({ x: 3, y: 1 }, { x: 3, y: 5 });
      assert.strictEqual(line.findY(3), 1);
    });

    it("should give NaN if given x is outside the line segment", () => {
      const line = new Line({ x: 3, y: 2 }, { x: 6, y: 5 });
      assert.isNaN(line.findY(7));
    });
  });

  describe("#split", () => {
    it("should divide line in two equal line if length of line is even", () => {
      const line = new Line({ x: 3, y: 2 }, { x: 7, y: 6 });
      const expected = [
        new Line({ x: 3, y: 2 }, { x: 5, y: 4 }),
        new Line({ x: 5, y: 4 }, { x: 7, y: 6 })
      ];
      assert.deepStrictEqual(line.split(), expected);
    });

    it("should divide line in two equal line if length of line is odd", () => {
      const line = new Line({ x: 3, y: 2 }, { x: 6, y: 5 });
      const expected = [
        new Line({ x: 3, y: 2 }, { x: 4.5, y: 3.5 }),
        new Line({ x: 4.5, y: 3.5 }, { x: 6, y: 5 })
      ];
      assert.deepStrictEqual(line.split(), expected);
    });

    it("should give two same line if length of line is zero", () => {
      const line = new Line({ x: 3, y: 2 }, { x: 3, y: 2 });
      const expected = [
        new Line({ x: 3, y: 2 }, { x: 3, y: 2 }),
        new Line({ x: 3, y: 2 }, { x: 3, y: 2 })
      ];
      assert.deepStrictEqual(line.split().expected);
    });
  });

  describe("#hasPoint", () => {
    it("should validate if given point are lies on the line", () => {
      const line = new Line({ x: 3, y: 2 }, { x: 5, y: 4 });
      const point = new Point(4, 3);
      assert.isTrue(line.hasPoint(point));
    });

    it("should invalidate if given point aren't lies on the line", () => {
      let line = new Line({ x: 1, y: 1 }, { x: 10, y: 10 });
      let point = new Point(1, 11);
      assert.isFalse(line.hasPoint(point));

      line = new Line({ x: 1, y: 1 }, { x: 10, y: 10 });
      point = new Point(11, 1);
      assert.isFalse(line.hasPoint(point));
    });

    it("should invalidate if given point are not instanceof Point class", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 10, y: 10 });
      const point = { x: 2, y: 5 };
      assert.isFalse(line.hasPoint(point));
    });

    it("should validate if the given point is on the line segment and the line is a vertical line", function() {
      const line = new Line({ x: -1, y: 2 }, { x: -1, y: 20 });
      const point = new Point(-1, 7);
      assert.ok(line.hasPoint(point));
    });
  });

  describe("#findPointFromStart", () => {
    it("should give point of a line in a specific distance", () => {
      const line = new Line({ x: 8, y: 1 }, { x: 10, y: 1 });
      const expected = new Point(9, 1);
      assert.deepStrictEqual(line.findPointFromStart(1), expected);
    });

    it("should give null if given distance is less than 0", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.isNull(line.findPointFromStart(-1));
    });
  });

  describe("#findPointFromEnd", () => {
    it("should give point of a line in a specific distance", () => {
      const line = new Line({ x: 7, y: 1 }, { x: 10, y: 1 });
      const expected = new Point(9, 1);
      assert.deepStrictEqual(line.findPointFromEnd(1), expected);
    });

    it("should give null if given distance is less than 0", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.isNull(line.findPointFromEnd(-1));
    });

    it("should give null if given distance are more than line length", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.isNull(line.findPointFromEnd(100));
    });
  });
});
