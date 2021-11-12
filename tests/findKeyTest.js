const assert = require('chai').assert;
const findKey   = require('../findKey');

describe("#findKey", () => {
  it("returns 'noma' when passed callback for x.stars === 2", () => {
    const restaurantStars = {
      "Blue Hill": { stars: 1 },
      "Akeleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    assert.strictEqual(findKey(restaurantStars,  x => x.stars === 2), "noma");
  });

  it("returns 'Akeleri' when passed callback for x.stars > 2", () => {
    const restaurantStars = {
      "Blue Hill": { stars: 1 },
      "Akeleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    assert.strictEqual(findKey(restaurantStars,  x => x.stars > 2), "Akeleri");
  });

  it("returns undefined when passed callback for x.stars === 5", () => {
    const restaurantStars = {
      "Blue Hill": { stars: 1 },
      "Akeleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    assert.strictEqual(findKey(restaurantStars,  x => x.stars === 5), undefined);
  });
});