
const middle = (arr) => {
  if (arr.length < 3) { //check if array is at least 3 (otherwise return empty array)
    return [];
  } else if (arr.length % 2) { //Check if arr.length divisible by 2 (will have single middle value if truthy/not div by 2)
    return [arr[(arr.length - 1) / 2]];
  } else {
    return [arr[Math.floor((arr.length - 1) / 2)], arr[Math.ceil((arr.length - 1) / 2)]];
    // For arr divisible by 2 (will have 2 middle values) - divide by 2, then use Math.floor and Math.ceil to obtain array indexes below and above the middle. Set the values of these two indexes to middleArr.
  }
};

module.exports = middle;