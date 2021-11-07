const flatten = (arr) => {
  let flattened = []; //container variable for flattened array (to be returned)
  for (let i = 0; i < arr.length; i ++) {
    if (!Array.isArray(arr[i])) {
      flattened.push(arr[i]);
      //if not array, then push value to flattened
    } else {
      for (let l = 0; l < arr[i].length; l ++) {
        flattened.push(arr[i][l]);
        //loop through nested array values, pushing each to flattened
      }
    }
  }
  return (flattened);
};

// TEST/ASSERTION FUNCTIONS
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

//TEST CASES
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
// assertArraysEqual(flatten([1, 2, [3, 4], 5, []]), [1,2,3,4,5]);
// assertArraysEqual(flatten([1, "5", "pony", [4, undefined]]), [1, "5", "pony", 4, undefined]);

module.exports = flatten;