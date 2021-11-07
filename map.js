// TEST FUNCTIONS //
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i ++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`⭐️⭐️⭐️ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🔥🔥🔥 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

//MAIN FUNCTION//

/* Our map function will take in two arguments:
  - An array to map
  - A callback function
The map function will return a new array based on the results of the callback function.
 */

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//TEST CASES//
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const results2 = map(words, word => word.toUpperCase());
assertArraysEqual(results2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

const results3 = map(numbers, num => Math.floor(num / 2));
assertArraysEqual(results3, [0, 1, 1, 2, 2]);

const results4 = map(numbers, num => num.toString());
assertArraysEqual(results4, ["1", "2", "3", "4", "5"]);

const results5 = map([], item => item[1]);
assertArraysEqual(results5, []);

module.exports = map

