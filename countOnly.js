//// Function Description ////
// Function countOnly accepts an array and an object. It returns an object containing counts of items listed as truthy per the parameter.

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (!results[item]) {
        results[item] = 1;
      } else {
        results[item]++;
      }
    }
  }
  return results;
};

module.exports = countOnly;
