const assert = require('chai').assert;
const head   = require('../head');

//TEST FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭐️⭐️⭐️ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔥🔥🔥 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


// TEST CASES
const result1 = countLetters("NEWSFLASH: Ellie wins dog of the year award");
const result2 = countLetters();
const result3 = countLetters(" ");
console.log(result3);

assertEqual(result1["e"], 5);
assertEqual(result1["l"], 3);
assertEqual(result2, undefined);
assertEqual(result3, undefined);
