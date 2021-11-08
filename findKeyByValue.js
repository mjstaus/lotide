const findKeyByValue = (object, value) => {
  for (let prop in object) {
    if (object[prop] === value) {
      return prop;
    }
  }
};

module.exports = findKeyByValue;
