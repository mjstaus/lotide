//// Function Description ////
// Function tail accepts an array and returns a new array containing every element except the head (first element) of the array argument.

const tail = function(arr) {
  let tailArr = [];
  if (arr) {
    tailArr = arr.slice(1);
  }
  return tailArr;
};

module.exports = tail;