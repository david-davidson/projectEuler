'use strict';

/**
 * Helper function that accepts an object (with numeric values) and
 * returns the product of its values
 *
 * @param {Object} numberObject: the object whose values we'll use
 * @returns {Number} the product of the input's values
 */

module.exports = function(numberObject) {
	var product = 1; // Just a placeholder to allow for multiplication
	for (var key in numberObject) {
		product *= numberObject[key];
	}
	return product;
}