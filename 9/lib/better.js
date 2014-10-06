'use strict';

/**
 * Uses Euclid's formula to generate triples: a = m^2 - n^2, b = 2mn, c = m^2 + n^2
 * Cf. http://en.wikipedia.org/wiki/Pythagorean_triple#Generating_a_triple
 *
 * (See below for mathematical steps)
 *
 * Performance: O(N^2)
 *
 * @param {Number} max: the target sum
 * @returns {Object} the matching Pythagorean triple, or (if none) null
 */

module.exports = function(max) {
	var n,
		m;

	max = max / 2;

	for (n = 1; n < max; n++) {
		for (m = n + 1; m < (max - n); m++) {
			if (n === max / m - m) { // See mathematical steps below
				return { // Return right away, since we're trying to optimize a little
					a: Math.pow(m, 2) - Math.pow(n, 2),
					b: 2 * m * n,
					c: Math.pow(m, 2) + Math.pow(n, 2)
				};
			}
		}
	}
	return null;
};

/*

Premises:
	* a = m^2 - n^2; b = 2mn; c = m^2 + n^2
	* a + b + c = 1000
	* m must be larger than n, since a (m^2 - n^2) is positive

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