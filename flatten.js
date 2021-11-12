//// Function Description ////
// Function flatten accepts an array (containing nested arrays), and returns a single-level array

const flatten = (arr) => {
  let flattened = [];
  for (let i = 0; i < arr.length; i ++) {
    if (!Array.isArray(arr[i])) {
      flattened.push(arr[i]);
      //if not array, then push value to flattened
    } else {
      for (let l = 0; l < arr[i].length; l ++) {
        flattened.push(arr[i][l]);
        //loop through nested array values, pushing each to flattened
      }
    }
  }
  return (flattened);
};

module.exports = flatten;