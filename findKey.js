//// Function Description ////
// Function findKey accepts an object and a callback function. It scans the object and returns the first key for which the callback returns a truthy value. If no key is found that meets callback criteria, then function returns undefined.

const findKey = (object, callback) => {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  } return undefined;
};

module.exports = findKey;
