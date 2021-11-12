//// Function Description ////
// Function takeUntil will return a slice of the array argument with elements taken from the beginning. The slice ends at the array index at which the callback returns a truthy value.

const takeUntil = (array, callback) => {
  for (let item of array) {
    if (callback(item)) {
      return array.slice(0, array.indexOf(item));
    }
  } return array;
};

module.exports = takeUntil;