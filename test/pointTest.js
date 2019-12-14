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
    it("should give addition when addition function is given", function() {
      const point = new Point(1, 2);
      const add = (x, y) => x + y;
      const actual = point.visit(add);
      assert.deepStrictEqual(actual, 3);
    });
  });
});
