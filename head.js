//// Function Description ////
// Function head accepts an array and returns the value of the first item in the array

const head = function(arr) {
  if (arr) {
    return arr[0];
  } else {
    return undefined;
  }
};

module.exports = head;