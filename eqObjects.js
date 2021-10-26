// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭐️⭐️⭐️ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔥🔥🔥 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;  //check if the two objects have same num keys
  }
  for (let key1 in object1) {
    for (let key2 in object2) {
      if (object1[key1] === object2[key2])
        return true;
    }
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

// check if objects have same number of keys
// loop through object 1 keys and check if object1["key"] === object2["key"]
