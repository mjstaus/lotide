const assert = require('chai').assert;
const letterPositions  = require('../letterPositions');


describe("#letterPositions", () => {
  it("returns array [0] for letter 'h' of input 'hello'", () => {
    const result1 = letterPositions("hello")
    assert.deepEqual(result1["h"], [0]);
  });
  it("returns array [2,3] for letter 'l' of input 'hello'", () => {
    const result1 = letterPositions("hello")
    assert.deepEqual(result1["l"], [2,3]);
  });
  it("returns array [1, 12, 17] for letter 'e' of input 'hello my name is Earl'", () => {
    const result1 = letterPositions("hello my name is Earl")
    assert.deepEqual(result1["e"], [1, 12, 17]);
  });
  it("returns undefined for character ' ' of input 'hello my name is Earl'", () => {
    const result1 = letterPositions("hello my name is Earl")
    assert.deepEqual(result1[" "], undefined);
  });
  it("returns undefined for character 'z' of input 'hello my name is Earl'", () => {
    const result1 = letterPositions("hello my name is Earl")
    assert.deepEqual(result1["z"], undefined);
  });
});