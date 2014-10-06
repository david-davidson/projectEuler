'use strict';

var isPythagoreanTriple = function(a, b, c) {
	return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
};

module.exports = function(max) {
	var results = [],
		a,
		b,
		c;

	for (a = 1; a <= max; a++) {
		for (b = a + 1; b <= (max - a); b++) {
			for (c = b + 1; c <= (max - (a + b)); c++) {
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