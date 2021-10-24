const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭐️⭐️⭐️ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔥🔥🔥 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// MAIN FUNCTION
const countLetters = (input) => {
  if (!input) {
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


// TEST CASES
const result1 = countLetters("NEWSFLASH: Ellie wins dog of the year award");
const result2 = countLetters();
const result3 = countLetters(" ");
console.log(result3);

assertEqual(result1["e"], 5);
assertEqual(result1["l"], 3);
assertEqual(result2, undefined);
assertEqual(result3, undefined);

