const assert = require("chai").assert;
const Point = require("../src/point.js");
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
      assert.closeTo(circle.area, 154, 0.1);
    });

    it("should give zero as area if radius is zero", () => {
      const circle = new Circle({ x: 0, y: 0 }, 0);
      assert.strictEqual(circle.area, 0);
    });
  });

  describe("#perimeter", () => {
    it("should give perimeter of given circle", () => {
      const circle = new Circle({ x: 0, y: 0 }, 7);
      assert.closeTo(circle.perimeter, 44, 0.3);
    });

    it("should give zero if radius of circle is zero", () => {
      const circle = new Circle({ x: 0, y: 0 }, 0);
      assert.strictEqual(circle.perimeter, 0);
    });
  });

  describe("#hasPoint", () => {
    it("should validate if given point is lies on the circle's circumference", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(0, 5);
      assert.isTrue(circle.hasPoint(point));
    });

    it("should invalidate if given point are not lies on the circle's circumference", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(1, 5);
      assert.isFalse(circle.hasPoint(point));
    });

    it("should invalidate if given point is not instanceof Point", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = { x: 0, y: 5 };
      assert.isFalse(circle.hasPoint(point));
    });
  });

  describe("#covers", () => {
    it("should validate if point is inside the circle", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(2.5, 2.5);
      assert.isTrue(circle.covers(point));
    });

    it("should invalidate if points are outside the circle", () => {
      const circle = new Circle({ x: 1, y: 2 }, 3);
      const point = new Point(4, 4);
      assert.isFalse(circle.covers(point));
    });

    it("should validate if given point are lies on the circumference of circle", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(5, 0);
      assert.isTrue(circle.covers(point));
    });

    it("should invalidate if given points are not instance of Point class", () => {
      const circle = new Circle({ x: 0, y: 0 }, 3);
      const point = { x: 1, y: 1 };
      assert.isFalse(circle.covers(point));
    });

    it("should validate if given point are lies on the circle of center", () => {
      const circle = new Circle({ x: 0, y: 0 }, 3);
      const point = new Point(0, 0);
      assert.isTrue(circle.covers(point));
    });
  });

  describe("#moveTo", () => {
    it("should move cursor one center to another center", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const newCenter = { x: 3, y: 3 };
      const expected = new Circle({ x: 3, y: 3 }, 5);
      assert.isTrue(expected instanceof Circle);
      assert.deepStrictEqual(circle.moveTo(newCenter), expected);
    });

    it("should give same circle if given point are circle's center", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const newCenter = { x: 0, y: 0 };
      const expected = new Circle({ x: 0, y: 0 }, 5);
      assert.isTrue(expected instanceof Circle);
      assert.deepStrictEqual(circle.moveTo(newCenter), expected);
    });
  });
});
