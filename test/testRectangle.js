const assert = require("chai").assert;
const Point = require("../src/point.js");
const Rectangle = require("../src/rectangle.js");

describe("#Rectangle", () => {
  describe("toString", () => {
    it("should give string representation of Rectangle", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const expected = "[Rectangle (1,1) to (2,3)]";
      assert.strictEqual(rectangle.toString(), expected);
    });
  });
});
