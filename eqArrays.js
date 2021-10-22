const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭐️⭐️⭐️ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔥🔥🔥 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = (arr1, arr2) => {
  for(let i = 0; i < 3 ; i ++) {
    if(arr1[i] !== arr2[i]){
      return false
    }
  }
  return true
}

// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), false)
assertEqual(eqArrays([1, 2], [1, 2, 3]), false)
assertEqual(eqArrays(["sandwich", 2, 3], ["sandwich", 2, 3]), true)
assertEqual(eqArrays([], []), true)