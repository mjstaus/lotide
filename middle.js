//// Function Description ////
// Function middle accepts an array and returns an array containing the middle-most element(s) of the array.

const middle = (arr) => {
  const length = arr.length;
  const middle = (length - 1) / 2;
  if (length < 3) return [];
  else if (arr.length % 2) return [arr[middle]];
  else return [arr[Math.floor(middle)], arr[Math.ceil(middle)]];
};

module.exports = middle;