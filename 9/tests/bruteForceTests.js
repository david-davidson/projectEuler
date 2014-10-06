'use strict';

var chai = require('chai'),
	expect = chai.expect,
	bruteForce = require('../lib/bruteForce'),
	results = bruteForce(1000);

describe('The brute-force function', function() {
	it('Returns its results as an array, regardless of success', function() {
		expect(Array.isArray(results)).to.eql(true);
		expect(Array.isArray(bruteForce(0))).to.eql(true); // Empty array
	});

	it('Finds at least one match given the input of 1,000', function() {
		expect(results.length).to.be.above(0);
	});

	it('Finds *only* one match', function() {
		expect(results.length).to.eql(1);
	});

	it('Finds a valid Pythagorean triple', function() {
		var firstResult = results[0],
			a,
			b,
			c;

		expect(firstResult).to.have.property('a');
		expect(firstResult).to.have.property('b');
		expect(firstResult).to.have.property('b');
		a = firstResult.a;
		b = firstResult.b;
		c = firstResult.c;
		expect(Math.pow(a, 2) + Math.pow(b, 2)).to.eql(Math.pow(c, 2));
		expect(a + b + c).to.eql(1000);
	});

});