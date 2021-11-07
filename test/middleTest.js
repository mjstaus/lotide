const assert = require('chai').assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns [15, 4] for [1, 2, 15, 4, 5, 7]", () => {
    assert.deepEqual(middle([1, 2, 15, 4, 5, 7]), [15, 4]);
  });
  it("returns emty array for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns ['Abby'] for ['Ellie', 'Abby', 'Dina]", () => {
    assert.deepEqual(middle(["Ellie", "Abby", "Dina"]), ["Abby"]);
  });
  it("returns ['2', '3'] for ['1', '2', '3', '4']", () => {
    assert.deepEqual(middle(["1", "2", "3", "4"]), ["2", "3"]);
  });
});