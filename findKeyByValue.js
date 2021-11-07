
const findKeyByValue = (object, value) => {
  for (let prop in object) {
    if (object[prop] === value) {
      return prop;
    }
  }
};

//TEST/ASSERTION FUNCTIONS
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`⭐️⭐️⭐️ Assertion Passed: [${actual}] === [${expected}]`);
//   } else {
//     console.log(`🔥🔥🔥 Assertion Failed: [${actual}] !== [${expected}]`);
//   }
// };

//TEST CASES
// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");

module.exports = findKeyByValue;
