const subtract = require("./index");

test("adds 3 - 2 to equal 1", () => {
  expect(subtract(3, 2)).toBe(1);
});
