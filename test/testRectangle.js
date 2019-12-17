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

  describe("#perimeter", () => {
    it("should give perimeter of rectangle", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 5 });
      assert.strictEqual(rectangle.perimeter, 16);
    });

    it("should give perimeter if length is zero", () => {
      const rectangle = new Rectangle({ x: 1, y: 5 }, { x: 1, y: 4 });
      assert.strictEqual(rectangle.perimeter, 2);
    });

    it("should give perimeter if width is zero", () => {
      const rectangle = new Rectangle({ x: 1, y: 5 }, { x: 4, y: 5 });
      assert.strictEqual(rectangle.perimeter, 6);
    });

    it("should give zero as perimeter if length and width is zero", () => {
      const rectangle = new Rectangle({ x: 1, y: 5 }, { x: 1, y: 5 });
      assert.strictEqual(rectangle.perimeter, 0);
    });

    it("should give perimeter for negative coordinates", () => {
      const rectangle = new Rectangle({ x: -3, y: -5 }, { x: 2, y: 3 });
      assert.strictEqual(rectangle.perimeter, 26);
    });
  });

  describe("#isEqualTo", () => {
    it("should check if given object is same", () => {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const rectangle2 = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      assert.ok(rectangle1.isEqualTo(rectangle2));
    });
    it("should check if given object is not same", () => {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const rectangle2 = new Rectangle({ x: 1, y: 2 }, { x: 5, y: 4 });
      assert.notOk(rectangle1.isEqualTo(rectangle2));
    });
    it("should check if given object is not instance of Rectangle", () => {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const r = { pointA: { x: 1, y: 1 }, pointC: { x: 5, y: 4 } };
      assert.notOk(rectangle1.isEqualTo(r));
    });
    it("should check if same instance is passed", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      assert.ok(rectangle.isEqualTo(rectangle));
    });
  });

  describe("hasPoint", () => {
    it("should validate if points lies on rectangle's length", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = new Point(5, 2);
      assert.isTrue(rectangle.hasPoint(point));
    });

    it("should invalidate if points aren't lies on rectangle", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = new Point(7, 4);
      assert.isFalse(rectangle.hasPoint(point));
    });

    it("should invalidate if points aren't instance of Point", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = { x: 5, y: 4 };
      assert.isFalse(rectangle.hasPoint(point));
    });

    it("should validate if points lies on rectangle's width", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = new Point(3, 1);
      assert.isTrue(rectangle.hasPoint(point));
    });
  });

  describe("#covers", () => {
    it("should validate if given points are inside rectangle's perimeter", () => {
      const rectangle = new Rectangle({ x: 5, y: 5 }, { x: 0, y: 0 });
      const point = new Point(2.5, 2.5);
      assert.isTrue(rectangle.covers(point));
    });

    it("should invalidate if points are outside the rectangle", () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
      const point = new Point(4, 4);
      assert.isFalse(rectangle.covers(point));
    });

    it("should invalidate if given point are lies on the perimeter of rectangle", () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 5, y: 5 });
      const point = new Point(5, 3);
      assert.isFalse(rectangle.covers(point));
    });

    it("should invalidate if given points are not instance of Point class", () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
      const point = { x: 1, y: 1 };
      assert.isFalse(rectangle.covers(point));
    });
  });
});
