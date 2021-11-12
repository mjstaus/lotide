//// Function Description ////
// Function middle accepts an array and returns an array containing the middle-most element(s) of the array.

const middle = (arr) => {
  const length = arr.length;
  const middle = (length - 1) / 2;
  if (length < 3) return [];
  else if (arr.length % 2) { //Check if arr.length divisible by 2 (will have single middle value if truthy/not div by 2)
    return [arr[middle]];
  } else {
    return [arr[Math.floor(middle)], arr[Math.ceil(middle)]];
    // For arr divisible by 2 (will have 2 middle values) - divide by 2, then use Math.floor and Math.ceil to obtain array indexes below and above the middle. Set the values of these two indexes to middleArr.
  }
};

module.exports = middle;