const assert = require("chai").assert;
const Point = require("../src/point.js");
const Rectangle = require("../src/rectangle.js");

describe("#Rectangle", () => {
  describe("#toString", () => {
    it("should give string representation of Rectangle", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const expected = "[Rectangle (1,1) to (2,3)]";
      assert.strictEqual(rectangle.toString(), expected);
    });
  });

  describe("#area", () => {
    it("should give area of rectangle", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 5 });
      assert.strictEqual(rectangle.area, 16);
    });

    it("should give zero as area if length is zero", () => {
      const rectangle = new Rectangle({ x: 1, y: 5 }, { x: 1, y: 4 });
      assert.strictEqual(rectangle.area, 0);
    });

    it("should give zero as area if width is zero", () => {
      const rectangle = new Rectangle({ x: 1, y: 5 }, { x: 4, y: 5 });
      assert.strictEqual(rectangle.area, 0);
    });

    it("should give zero as area if length and width is zero", () => {
      const rectangle = new Rectangle({ x: 1, y: 5 }, { x: 1, y: 5 });
      assert.strictEqual(rectangle.area, 0);
    });

    it("should give area for negative coordinates", () => {
      const rectangle = new Rectangle({ x: -3, y: -5 }, { x: 2, y: 3 });
      assert.strictEqual(rectangle.area, 40);
    });
  });
});
