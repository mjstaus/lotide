//// Function Description ////
// Function without accepts a source array and an itemsToRemove array. It returns a new array with only those elements from source that are not present in the itemsToRemove array.

const without = (source, itemsToRemove) => {
  return source.filter((item) => {
    return !itemsToRemove.includes(item);
  });
};

module.exports = without;
