const assert = require('chai').assert;
const map  = require('../map');


describe("#map", () => {
  it('returns array ["g", "c", "t", "m", "t"] for callback "word => word[0]"', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[0])
    assert.deepEqual(results1, ["g", "c", "t", "m", "t"]);
  });
  it('returns array ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"] for callback "word => word.toUpperCase()"', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word.toUpperCase())
    assert.deepEqual(results1, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
  });
  it('returns array [0, 1, 1, 2, 2] for callback "num => Math.floor(num / 2)"', () => {
    const numbers = [1, 2, 3, 4, 5];
    const results1 = map(numbers, num => Math.floor(num / 2))
    assert.deepEqual(results1, [0, 1, 1, 2, 2]);
  });
  it('returns array ["1", "2", "3", "4", "5"] for callback "num => num.toString()"', () => {
    const numbers = [1, 2, 3, 4, 5];
    const results1 = map(numbers, num => num.toString())
    assert.deepEqual(results1, ["1", "2", "3", "4", "5"]);
  });
  it('returns empty array for callback "item => item[1]" when empty array is passed', () => {
    const items = [];
    const results1 = map([], item => item[1])
    assert.deepEqual(results1, []);
  });
});


// const results5 = map([], item => item[1]);
// assertArraysEqual(results5, []);