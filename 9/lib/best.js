'use strict';

/**
 * Uses Euclid's formula to generate triples: a = m^2 - n^2, b = 2mn, c = m^2 + n^2
 * Cf. http://en.wikipedia.org/wiki/Pythagorean_triple#Generating_a_triple
 *
 * (See below for mathematical steps)
 *
 * Performance: O(N)
 *
 * @param {Number} max: the target sum
 * @returns {Object} the matching Pythagorean triple, or (if none) null
 */

var isInteger = function(number) {
	return number === Math.floor(number);
};

module.exports = function(max) {
	var m,
		n;

	max = max / 2; // Since primitives are passed by value, no side effects

	for (m = 1; m < max; m++) {
		n = max / m - m; // See below for mathematical steps
		if (m > n && isInteger(n)) {
			return {
				a: Math.pow(m, 2) - Math.pow(n, 2),
				b: 2 * m * n,
				c: Math.pow(m, 2) + Math.pow(n, 2)
			};
		}
	}
	return null;
};

/*

Premises:
	* a = m^2 - n^2; b = 2mn; c = m^2 + n^2
	* a + b + c = 1000
	* m and n must both be integers
	* m must be larger than n, since a ( = m^2 - n^2) is positive

Replace a, b, and c:
	(m^2 - n^2) + 2mn + (m^2 + n^2) = 1000

The two n^2s cancel each other out:
	2m^2 + 2mn = 1000

Subtract 2m^2 from each side:
	2mn = 1000 - 2m^2

Divide by two:
	mn = 500 - m^2

Divide by m:
	n = (500 - m^2) / m

That is...
	n = 500/m - m

*/