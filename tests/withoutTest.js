const assert = require('chai').assert;
const without = require("../without");

describe("#without", () => {
  it('returns array ["hello", "world"] for input ["hello", "world", "lighthouse"]', () => {
    const words = ["hello", "world", "lighthouse"];
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
  });
});
