// TEST FUNCTIONS //
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭐️⭐️⭐️ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔥🔥🔥 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// MAIN FUNCTION //
/* Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined. */

const findKey = (object, callback) => {
  for (let key in object) {
    if (callback(object[key])) {
      // console.log('key', callback(object[key]));
      return key;
    }
  } return undefined;
};

// TEST CASES //

// const BLUE_HILL = "Blue Hill";
// const AKALERI = "Akaleri";
// const NOMA = "noma";
// const ELBULLI = "elBulli";
// const ORA = "Ora";
// const AKELARRE = "Akelarre";

// const restaurantStars = {
//   [BLUE_HILL] : { stars: 1 },
//   [AKALERI]:   { stars: 3 },
//   [NOMA]:      { stars: 2 },
//   [ELBULLI]:   { stars: 3 },
//   [ORA]:       { stars: 2 },
//   [AKELARRE]:  { stars: 3 }
// };

// assertEqual(findKey(restaurantStars,  x => x.stars === restaurantStars[NOMA].                     stars), NOMA);
// assertEqual(findKey(restaurantStars,  x => x.stars === 5), undefined);
// assertEqual(findKey(restaurantStars,  x => x.stars > 2), AKALERI);

// assertEqual(findKey(restaurantStars,  x => x.stars > 2), "Akaleri");

//NOTES:
// Magic string /magic number = unbound strings or numbers, not stored to variable
//NEVER have any freely written strings or numbers floating around

module.exports = findKey
