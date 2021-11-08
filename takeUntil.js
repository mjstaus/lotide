/*
The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

To keep things simple, the callback should only be provided one value: The item in the array.
 */

const takeUntil = (array, callback) => {
  for (let item of array) {
    if (callback(item)) {
      return array.slice(0, array.indexOf(item));
    }
  } return array;
};

module.exports = takeUntil;