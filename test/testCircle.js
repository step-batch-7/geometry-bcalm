const assert = require("chai").assert;
const Circle = require("../src/circle.js");

describe("Circle", () => {
  describe("#toString", () => {
    it("should give string representation of circle object", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const actual = circle.toString();
      const expected = "[Circle @(0,0) radius 5]";
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("#isEqualTo", () => {
    it("should validate if given circle has same center and radius", () => {
      const circle = new Circle({ x: 0, y: 0 }, 3);
      const otherCircle = new Circle({ x: 0, y: 0 }, 3);
      assert.isTrue(circle.isEqualTo(otherCircle));
    });

    it("should invalidate if given circle is not instance of Circle", () => {
      const circle = new Circle({ x: 0, y: 0 }, 3);
      const otherCircle = { center: { x: 0, y: 0 }, radius: 3 };
      assert.isFalse(circle.isEqualTo(otherCircle));
    });

    it("should invalidate if given circle hasn't same center", () => {
      const circle = new Circle({ x: 0, y: 0 }, 3);
      const otherCircle = new Circle({ x: 1, y: 0 }, 3);
      assert.isFalse(circle.isEqualTo(otherCircle));
    });

    it("should invalidate if given circle hasn't same radius", () => {
      const circle = new Circle({ x: 0, y: 0 }, 3);
      const otherCircle = new Circle({ x: 0, y: 0 }, 4);
      assert.isFalse(circle.isEqualTo(otherCircle));
    });

    it("should invalidate if given circle hasn't same center and radius", () => {
      const circle = new Circle({ x: 0, y: 0 }, 3);
      const otherCircle = new Circle({ x: 1, y: 0 }, 4);
      assert.isFalse(circle.isEqualTo(otherCircle));
    });
  });

  describe("#area", () => {
    it("should give area of circle", () => {
      const circle = new Circle({ x: 0, y: 0 }, 7);
      assert.closeTo(circle.area, 154, 0.5);
    });

    it("should give zero as area if radius is zero", () => {
      const circle = new Circle({ x: 0, y: 0 }, 0);
      assert.strictEqual(circle.area, 0);
    });
  });
});
