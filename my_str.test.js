const assert = require("assert");
const my_str = require("./my_str");

describe("concat function", () => {
  it("concat two strings", () => {
    const actual = my_str.concat("good ", "morning");
    const expected = "good morning";
    assert.strictEqual(expected, actual);
  });
  it("concat two strings", () => {
    assert.throws(() => {
      const actual = my_str.concat(undefined, "morning");
    });
  });
});
