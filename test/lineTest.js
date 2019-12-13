const Line = require("../src/line.js");
const assert = require("chai").assert;

describe("Line", () => {
  describe("toString", () => {
    it("String representation of line object", () => {
      const a = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actual = a.toString();
      const expected = "Line: (1,2)----(3,4)";
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("isEqualTo", () => {
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
  });

  describe("length", () => {
    it("Should give length of line for positive points", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 4, y: 6 });
      assert.deepStrictEqual(line.length, 5);
    });

    it("Should give length of line for negative points", () => {
      const line = new Line({ x: -1, y: -2 }, { x: 2, y: 2 });
      assert.deepStrictEqual(line.length, 5);
    });

    it("Should give length of line for floating points", () => {
      const line = new Line({ x: 3, y: 2 }, { x: 7, y: 8 });
      assert.approximately(line.length, 7.21, 0.1);
    });
  });

  describe("slope", () => {
    it("should give slope of line for positive integer", () => {
      const line = new Line({ x: 3, y: 2 }, { x: 6, y: 5 });
      assert.deepStrictEqual(line.slope, 1);
    });

    it("should give slope for negative integer", () => {
      const line = new Line({ x: -3, y: -2 }, { x: -6, y: -5 });
      assert.deepStrictEqual(line.slope, 1);
    });

    it("should give NaN if length of line is zero", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 1, y: 1 });
      assert.isNaN(line.slope);
    });

    it("should give zero if line is parallel to x-axis", () => {
      const line = new Line({ x: 5, y: 3 }, { x: 7, y: 3 });
      assert.deepStrictEqual(line.slope, 0);
    });

    it("should give infinity if line is parallel to y- axis", () => {
      const line = new Line({ x: 3, y: 1 }, { x: 3, y: 4 });
      assert.deepStrictEqual(line.slope, Infinity);
    });
  });

  describe("isParallelTo", () => {
    it("Two lines have same slope are parallel", () => {
      const line = new Line({ x: 3, y: 2 }, { x: 6, y: 5 });
      const otherLine = new Line({ x: 5, y: 4 }, { x: 8, y: 7 });
      assert.isTrue(line.isParallelTo(otherLine));
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
  });
});
