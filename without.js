//MAIN FUNCTION
const without = (source, itemsToRemove) => {
  let withoutArray = [];
  for (let i = 0; i < source.length; i++) {
    let keep = true;
    for (let l = 0; l < itemsToRemove.length; l++) {
      if (source[i] === itemsToRemove[l]) {
        keep = false;
      }
    }
    if (keep) {
      withoutArray.push(source[i]);
    }
  }
  return withoutArray;
};

// TEST/ASSERTION FUNCITONS
// const eqArrays = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i ++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = (arr1, arr2) => {
//   if (eqArrays(arr1, arr2)) {
//     console.log(`⭐️⭐️⭐️ Assertion Passed: [${arr1}] === [${arr2}]`);
//   } else {
//     console.log(`🔥🔥🔥 Assertion Failed: [${arr1}] !== [${arr2}]`);
//   }
// };

//TEST CODE
// assertArraysEqual(without([1, 2, 3], [1]), [2,3]); // true
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); //true
// assertArraysEqual(without([1, 2, 3], [1]), [3]); //false
// assertArraysEqual(without([1, 2, 3], []), [1]); //false
// assertArraysEqual(without([1], [1]), []);//true
// assertArraysEqual(without([], []), []);//true

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// Refactor using filter: *Filter method creates new array with all elements that pass the test implemented by the callback.
// Callback function needs to return el !== itemsToRemove
//
// const without = (source, itemsToRemove) => {
//   return source.filter((item) => {
//     return !itemsToRemove.includes(item)
//   })
// }

module.exports = without;
