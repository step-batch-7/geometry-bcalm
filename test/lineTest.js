const Line = require("../src/line.js");
const assert = require("assert");

describe("Line", () => {
  describe("toString", () => {
    it("should convert given data to string", () => {
      const a = new Line([1, 2], [2, 3]);
      const actual = a.toString();
      const expected = "Line start from (1,2) and ends with (2,3)";
      assert.deepStrictEqual(actual, expected);
    });
  });
  describe("isEqualTo", () => {
    it("should give true if given line is equal to our line", () => {
      const anotherLine = { x1: 1, y1: 2, x2: 3, y2: 4 };
      const a = new Line([1, 2], [3, 4]);
      assert.ok(a.isEqualTo(anotherLine));
    });
  });
});
