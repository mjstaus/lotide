const assertArraysEqual = require("../assertArraysEqual");

//TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, "3"], [1, 2, 3]);
assertArraysEqual([1, 2], [1, 2, 3]);
assertArraysEqual(["sandwich", 2, 3], ["sandwich", 2, 3]);
assertArraysEqual([], []);
assertArraysEqual([1, 2, 3, 5], [1, 2, 3, 5]);