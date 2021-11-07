const assert = require('chai').assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns [6,7] for [5, 6, 7]", () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns empty array for [5]", () => {
    assert.deepEqual(tail([5]), []);
  });
  it("returns empty array when no argument passed", () => {
    assert.deepEqual(tail(), []);
  });
});