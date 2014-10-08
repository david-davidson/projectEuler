'use strict';

/**
 * Helper function that determines if its input is an integer
 *
 * @param {Number} number: the (possible) number to check
 * @returns {Boolean} the input's integer status
 */

var isInteger = function(number) {
	return number === Math.floor(number);
};

/**
 * Helper function that accepts an object (with numeric values) and
 * returns the product of its values
 *
 * @param {Object} numberObject: the object whose values we'll use
 * @returns {Number} the product of the input's values
 */

var findProductOfValues = function(numberObject) {
	var product = 1; // Just a placeholder to allow for multiplication
	for (var key in numberObject) {
		product *= numberObject[key];
	}
	return product;
};

/**
 * Uses a simplified version of Euclid's formula to generate and validate triples
 * Cf. http://en.wikipedia.org/wiki/Pythagorean_triple#Generating_a_triple
 *
 * Performance: O(N)
 *
 * @param {Number} max: the target sum
 * @returns {Object} the matching Pythagorean triple, or (if none) null
 */

var findTripleThatSumsTo = function(max) {

	max = max / 2; // Since primitives are passed by value, no side effects

	for (var m = 1; m < max; m++) {
		var n = (max / m) - m; // Simplified version of Euclid's formula (see below)
		if (m > n && isInteger(n)) { // Known preconditions (see below)
			return { // Full implementation of Euclid's formula
				a: Math.pow(m, 2) - Math.pow(n, 2),
				b: 2 * m * n,
				c: Math.pow(m, 2) + Math.pow(n, 2)
			};
		}
	}
	return null; // Only if no match
};

var triple = findTripleThatSumsTo(1000);

if (triple) {
	var product = findProductOfValues(triple);
	console.log('Matching Pythagorean triple: %s', JSON.stringify(triple)); // {"a":375,"b":200,"c":425}
	console.log('The product of a, b, and c: %d', product); // 31875000
} else {
	console.log('No matching triple!');
}

/**
 * What we know:
 * 	- a = m^2 - n^2; b = 2mn; c = m^2 + n^2 (Euclid's formula)
 * 	- a + b + c = 1000 (problem spec)
 * 	- m and n must both be integers (Euclid's formula)
 * 	- m must be larger than n, since a is positive (self-evident)
 *
 * Solve for n:
 *	Replace a, b, and c:
 *		(m^2 - n^2) + 2mn + (m^2 + n^2) = 1000
 *
 *	The two n^2s cancel each other out:
 *		2m^2 + 2mn = 1000
 *
 *	Subtract 2m^2 from each side:
 *		2mn = 1000 - 2m^2
 *
 *	Divide by two:
 *		mn = 500 - m^2
 *
 *	Divide by m:
 *		n = (500 - m^2) / m
 *
 *	That is...
 *		n = 500/m - m, where 500 is 1/2 the target sum
 */