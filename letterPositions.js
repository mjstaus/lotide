//// Function Description ////
// Function letterPositions accepts a string and returns an object containing all characters in the string (keys) and the indices where each character is found (values).

const letterPositions = function(sentence) {
  const string = sentence.toLowerCase();
  const results = {};
  for (let i = 0; i < string.length; i++) {
    let letter = string[i]; //set variable just for readability
    if (letter === " ") {
      continue;
    }
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    } 
  }
  return results;
};

module.exports = letterPositions;




