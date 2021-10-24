const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`⭐️⭐️⭐️ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🔥🔥🔥 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

// MAIN FUNCTION
const letterPositions = function (sentence) {
  const results = {};
  for (let letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        console.log(sentence.indexOf(letter))
        results[letter].push(sentence.indexOf(letter));
      } else {
        results[letter] = [sentence.indexOf(letter)];
        console.log(results)
      }
    }
  }
  return results;
};

console.log(letterPositions('hello'))
/* Loop through sentence using for..of
    if letter is a space, skip it
    if results[letter] exists, push letter index into value (array)
    if result[letter] doens't exist, set new property (key = letter, letter index as value (array) )
    end loop
    return results*/
