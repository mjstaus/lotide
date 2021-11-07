const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

// TEST CODE
assertArraysEqual(middle([1, 2, 15, 4, 5, 7]), [15, 4]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle(["Ellie", "Abby", "Dina"]), ["Abby"]);
assertArraysEqual(middle(["1", "2", "3", "4"]), ["2", "3"]);