const tail = function(arr) {
  let tailArr = [];
  if (arr) {
    tailArr.push(arr.slice(1));
  }
  return tailArr;
};

module.exports = tail;