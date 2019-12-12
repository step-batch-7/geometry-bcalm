const Line = require("../src/line.js");
const assert = require("assert");

describe("Line", () => {
  describe("toString", () => {
    it("should convert given data to string", () => {
      const a = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actual = a.toString();
      const expected = "Line: (1,2)----(3,4)";
      assert.deepStrictEqual(actual, expected);
    });
  });
  describe("isEqualTo", () => {
    it("should give true if given line is equal to our line", () => {
      const a = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const b = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.ok(a.isEqualTo(b));
    });
  });
});
