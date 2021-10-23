const assertArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    console.log(`🔥🔥🔥 Assertion Failed: [${arr1}] !== [${arr2}]`);
    return;
  }
  for (let i = 0; i < arr1.length; i ++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🔥🔥🔥 Assertion Failed: [${arr1}] !== [${arr2}]`);
      return;
    }
  }
  console.log(`⭐️⭐️⭐️ Assertion Passed: [${arr1}] === [${arr2}]`);
};

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


assertArraysEqual(without([1, 2, 3], [1]), [2,3]); // true
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); //true
assertArraysEqual(without([1, 2, 3], [1]), [3]); //false
assertArraysEqual(without([1, 2, 3], []), [1]); //false
assertArraysEqual(without([1], [1]), []);//true
assertArraysEqual(without([], []), []);//true

// Refactor using filter: *Filter method creates new array with all elements that pass the test implemented by the callback.
// Callback function needs to return el !== itemsToRemove
//
// const without = (source, itemsToRemove) => {
//   return source.filter((item) => {
//     return !itemsToRemove.includes(item)
//   })
// }

