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




