const Point = require("../src/point.js");
const Line = require("../src/line.js");
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
    it("should give addition when addition function is given", () => {
      const point = new Point(1, 2);
      const add = (x, y) => x + y;
      const actual = point.visit(add);
      assert.deepStrictEqual(actual, 3);
    });

    it("should give the reminder when reminder function is given", () => {
      const point = new Point(1, 2);
      const reminder = (x, y) => x % y;
      const actual = point.visit(reminder);
      assert.deepStrictEqual(actual, 1);
    });
  });

  describe("clone", () => {
    it("should give a object with same field values", () => {
      const point = new Point(1, 2);
      const expected = new Point(1, 2);
      assert.deepStrictEqual(point.clone(), expected);
      assert.notStrictEqual(point.clone(), expected);
    });
  });

  describe("isEqualTo", () => {
    it("should validate if given points are equal", () => {
      const point = new Point(1, 2);
      const other = new Point(1, 2);
      assert.isTrue(point.isEqualTo(other));
    });

    it("should invalidate if given points are not equal", () => {
      const point = new Point(1, 2);
      const other = new Point(3, 4);
      assert.isFalse(point.isEqualTo(other));
    });

    it("should invalidate if given point are not instance of Point", () => {
      const point = new Point(1, 2);
      const other = { x: 1, y: 2 };
      assert.isFalse(point.isEqualTo(other));
    });
  });

  describe("findDistanceTo", () => {
    it("should give NaN if given point are not instance of Point", () => {
      const point = new Point(1, 2);
      const other = { x: 1, y: 3 };
      assert.isNaN(point.findDistanceTo(other));
    });

    it("should give distance b/w two positive points", () => {
      const point = new Point(1, 2);
      const other = new Point(3, 4);
      assert.approximately(point.findDistanceTo(other), 2.8, 0.2);
    });

    it("should give distance b/w two negative numbers", () => {
      const point = new Point(-1, -2);
      const otherPoint = new Point(-3, -4);
      assert.approximately(point.findDistanceTo(otherPoint), 2.8, 0.2);
    });

    it("should give zero if both points are same", () => {
      const point = new Point(1, 2);
      const otherPoint = new Point(1, 2);
      assert.strictEqual(point.findDistanceTo(otherPoint), 0);
    });
  });

  describe("isOn", () => {
    it("should validate if given points are on the line", () => {
      const point = new Point(2, 2);
      const line = new Line({ x: 1, y: 1 }, { x: 5, y: 5 });
      assert.isTrue(point.isOn(line));
    });

    it("should invalidate if given point are not on the line ", () => {
      const point = new Point(2, 2);
      const line = new Line({ x: 1, y: 1 }, { x: 4, y: 3 });
      assert.isFalse(point.isOn(line));
    });
  });
});
