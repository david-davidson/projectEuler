'use strict';

/**
 * Finds Pythagorean triples that sum to a given number
 *
 * Performance: O(N^3) (just a brute-force implementation)
 *
 * @param {Number} max: the target sum
 * @returns {Array} matching triples, stored as objects
 */

var isPythagoreanTriple = function(a, b, c) {
	return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
};

module.exports = function(max) {
	var results = []; // Return *all* results, just in case we find more than one matching triple

	for (var a = 1; a <= max; a++) {
		for (var b = a + 1; b <= (max - a); b++) {
			for (var c = b + 1; c <= (max - (a + b)); c++) {
				if (isPythagoreanTriple(a, b, c) && a + b + c === max) {
					results.push({
						a: a,
						b: b,
						c: c
					});
				}
			}
		}
	}
	return results;
};