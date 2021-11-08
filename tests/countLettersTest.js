const assert = require('chai').assert;
const countLetters   = require('../countLetters');

describe("#countLetters", () => {
  it("returns an object containing 'e': 5 for input 'NEWSFLASH: Ellie wins dog of the year award'", () => {
    const result1 = countLetters("NEWSFLASH: Ellie wins dog of the year award");
    assert.strictEqual(result1["e"], 5);
  });

  it("returns undefined when no argument passed in", () => {
    assert.strictEqual(countLetters(), undefined);
  });

  it("returns undefined when string containing only a space is passed in", () => {
    assert.strictEqual(countLetters(" "), undefined);
  });

  it("returns undefined when empty string is passed in", () => {
    assert.strictEqual(countLetters(""), undefined);
  });

  it("returns undefined when array is passed in", () => {
    assert.strictEqual(countLetters(["HELLO I AM ARRAY"]), undefined);
  });

  it("returns undefined when number is passed in", () => {
    assert.strictEqual(countLetters(4), undefined);
  });

  it("returns undefined when object is passed in", () => {
    assert.strictEqual(countLetters({"HELLO": "I AM OBJECT"}), undefined);
  });
});
