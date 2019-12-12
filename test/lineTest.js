const Line = require("../src/line.js");
const assert = require("assert");

describe("Line", () => {
  describe("toString", () => {
    it("should convert given data to string", () => {
      const a = new Line([1, 2], [2, 3]);
      const actual = a.toString;
      const expected = "Line start from 1,2 and ends with 2,3";
      assert.deepStrictEqual(actual, expected);
    });
  });
});
