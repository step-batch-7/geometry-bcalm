const assert = require("chai").assert;
const Circle = require("../src/circle.js");

describe("#Class", () => {
  it("should give string representation of circle object", () => {
    const circle = new Circle({ x: 0, y: 0 }, 5);
    const actual = circle.toString();
    const expected = "[Circle @(0,0) radius 5]";
    assert.deepStrictEqual(actual, expected);
  });
});
