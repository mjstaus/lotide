//TEST/ASSERTION FUNCTIONS
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

//MAIN FUNCTION
const middle = (arr) => {
  if (arr.length < 3) { //check if array is at least 3 (otherwise return empty array)
    return [];
  } else if (arr.length % 2) { //Check if arr.length divisible by 2 (will have single middle value)
    return [arr[(arr.length - 1) / 2]];
  } else {
    return [arr[Math.floor((arr.length - 1) / 2)], arr[Math.ceil((arr.length - 1) / 2)]];
    // For arr divisible by 2 (will have 2 middle values) - divide by 2, then use Math.floor and Math.ceil to obtain array indexes below and above the middle. Set the values of these two indexes to middleArr.
  }
};

// TEST CODE
assertArraysEqual(middle([1, 2, 15, 4, 5, 7]), [15, 4]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle(["Ellie", "Abby", "Dina"]), ["Abby"]);
assertArraysEqual(middle(["1", "2", "3", "4"]), ["2", "3"]);

