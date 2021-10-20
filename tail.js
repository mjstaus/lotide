const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭐️⭐️⭐️ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔥🔥🔥 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const tail = function(arr) {
  let tailArr = []
  if(arr) {
    tailArr.push(arr.slice(1))
  }
  return tailArr
};

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

assertEqual(tail([5,6,7]).toString(), [6,7].toString());
assertEqual(tail(["Hello", "Lighthouse", "Labs"]).toString(), ["Lighthouse", "Labs"].toString());
assertEqual(tail([5]).toString(), [].toString());
assertEqual(tail().toString(), [].toString())