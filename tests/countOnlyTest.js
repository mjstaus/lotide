const assert = require('chai').assert;
const countOnly   = require('../countOnly');

describe("#countOnly", () => {
  it("returns an object containing 'Jason': 1 for input array containing 1 occurance of string 'Jason' and input object specifying 'Jason': true", () => {
    const firstNames = ["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"];
    const result1 = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    });
    assert.strictEqual(result1["Jason"], 1);
  });
  it("returns undefined for input array containing 0 occurance of string 'Karima' and input object specifying 'Karima': true", () => {
    const firstNames = ["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"];
    const result1 = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    });
    assert.strictEqual(result1["Karima"], undefined);
  });
  it("returns undefined for input array containing 1 occurance of string 'Agouhanna' and input object specifying 'Agouhanna': false", () => {
    const firstNames = ["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"];
    const result1 = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    });
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});