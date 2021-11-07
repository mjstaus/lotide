const assertEqual = require("../assertEqual")
const eqArrays = require("../eqArrays")

//TEST CODE

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);
assertEqual(eqArrays(["sandwich", 2, 3], ["sandwich", 2, 3]), true);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1, 2, 3, 5], [1, 2, 3, 5]), true);