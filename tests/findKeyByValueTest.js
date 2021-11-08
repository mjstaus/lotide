const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeybyValue", () => {
  it("returns 'drama' when passed bestTVShowsByGenre object and 'The Wire'", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined when passed bestTVShowsByGenre object and 'That 70's Show'", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That 70's Show"), undefined);
  });

  it("returns undefined when passed bestTVShowsByGenre object and empty string", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined);
  });
});