//// Function Description ////
// Function countLetters accepts a string and then returns an object containing a count of each of the letters in that string

const countLetters = (input) => {
  if (!input || typeof input !== "string") {
    return;
  }
  const stringToCount = input.toLowerCase().replaceAll(" ", "");
  // Take input and make lowercase + remove all spaces
  if (!stringToCount) {
    return;
  }
  let results = {};
  for (let letter of stringToCount) {
    if (results[letter]) {
      results[letter] ++;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;
