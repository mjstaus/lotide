//// Function Description ////
// Function without accepts a source array and an itemsToRemove array. It returns a new array with only those elements from source that are not present in the itemsToRemove array.

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

/// STRETCH EXERCISE ////
// Refactor using filter: Filter method creates new array with all elements that pass the test implemented by the callback.

/* 
const without = (source, itemsToRemove) => {
  return source.filter((item) => {
    return !itemsToRemove.includes(item)
  })  */

module.exports = without;
