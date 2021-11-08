//// Function Description ////
// Function findKeyByValue takes in an object and a value. It scans the object and return the first key which contains the given value. It returns undefined if no key with that given value is found.

const findKeyByValue = (object, value) => {
  for (let prop in object) {
    if (object[prop] === value) {
      return prop;
    }
  }
};

module.exports = findKeyByValue;
