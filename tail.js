const tail = function(arr) {
  let tailArr = []
  if (arr) {
    tailArr = arr.slice(1);
  }
  return tailArr;
};

console.log(tail([5, 6,7]))

module.exports = tail;