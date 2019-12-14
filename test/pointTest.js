const Point = require("../src/point.js");
const assert = require("chai").assert;

describe("Point", () => {
  describe("toString", () => {
    it("should give string representation of point", () => {
      const point = new Point(2, 3);
      const expected = "Point @(2,3)";
      assert.deepStrictEqual(point.toString(), expected);
    });
  });

  describe("visit", function() {
    it("should give addition when addition function is given", () => {
      const point = new Point(1, 2);
      const add = (x, y) => x + y;
      const actual = point.visit(add);
      assert.deepStrictEqual(actual, 3);
    });

    it("should give the reminder when reminder function is given", () => {
      const point = new Point(1, 2);
      const reminder = (x, y) => x % y;
      const actual = point.visit(reminder);
      assert.deepStrictEqual(actual, 1);
    });
  });

  describe("clone", () => {
    it("should give a object with same field values", () => {
      const point = new Point(1, 2);
      const expected = new Point(1, 2);
      assert.deepStrictEqual(point.clone(), expected);
    });
  });
});
