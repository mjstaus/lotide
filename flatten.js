const flatten = (arr) => {
  let flattened = []; //container variable for flattened array (to be returned)
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