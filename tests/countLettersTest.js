const assert = require('chai').assert;
const countLetters   = require('../countLetters');

describe("#countLetters", () => {
  it("returns an object containing 'e': 5 for input 'NEWSFLASH: Ellie wins dog of the year award'", () => {
    const result1 = countLetters("NEWSFLASH: Ellie wins dog of the year award")
    assert.strictEqual(result1["e"], 5);
  });
});
// const result2 = countLetters();
// const result3 = countLetters(" ");
// console.log(result3);

// assertEqual(result1["l"], 3);
// assertEqual(result2, undefined);
// assertEqual(result3, undefined);
