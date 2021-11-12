const assert = require('chai').assert;
const takeUntil = require("../takeUntil");

describe("#takeUntil", () => {
  it('returns array [1, 2, 5, 7, 2] for inputs data1 and (x => x < 0)', () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const result1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(result1, [1, 2, 5, 7, 2]);
  });
  it('returns array ["I\'ve", "been", "to", "Hollywood"] for inputs data1 and (x => x < 0)', () => {
    const data1 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const result1 = takeUntil(data1, x => x === ',');
    assert.deepEqual(result1, ["I've", "been", "to", "Hollywood"]);
  });
  it('returns array [1, 2, 3, 4, 5] for inputs data1 and (x => x < 0)', () => {
    const data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result1 = takeUntil(data1, x => x > 5);
    assert.deepEqual(result1, [1, 2, 3, 4, 5]);
  });
  it('returns array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] for inputs data1 and (x => x < 0)', () => {
    const data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result1 = takeUntil(data1, x => x > 10);
    assert.deepEqual(result1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});