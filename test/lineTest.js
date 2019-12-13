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

  describe("length", function() {
    it("Should give length of line for positive points", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 4, y: 6 });
      assert.deepStrictEqual(line.length, 5);
    });

    it("Should give length of line for negative points", () => {
      const line = new Line({ x: -1, y: -2 }, { x: 2, y: 2 });
      assert.deepStrictEqual(line.length, 5);
    });
  });
});
