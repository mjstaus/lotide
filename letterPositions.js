const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭐️⭐️⭐️ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔥🔥🔥 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
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

// MAIN FUNCTION
const letterPositions = function(sentence) {
  const string = sentence.toLowerCase();
  const results = {};
  for (let i = 0; i < string.length; i++) {
    let letter = string[i]; //set variable just for readability
    if (letter === " ") {
      continue;
    }
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
    
  }
  return results;
};

// TEST CASES
const result1 = letterPositions('hello');
assertArraysEqual(result1['h'], [0]);
assertArraysEqual(result1['l'], [2, 3]);

const result2 = letterPositions('hello my name is Earl');
assertArraysEqual(result2["e"], [1, 12, 17]);
assertArraysEqual(result2["n"], [9]);
assertEqual(result2[" "], undefined);
assertEqual(result2["z"], undefined);




