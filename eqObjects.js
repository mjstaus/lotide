const eqArrays = require("./eqArrays");

const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false; //check if the two objects have same num keys
  }
  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) { //if value is an array
      return eqArrays(object1[key], object2[key]);
    } else if (typeof object1[key] === "object") { //if value is a non-array object
      return eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) { 
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
