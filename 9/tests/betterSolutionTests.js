'use strict';
/*jshint expr:true */

var chai = require('chai'),
	expect = chai.expect,
	better = require('../lib/better'),
	results = better(1000);

describe('The double-for-loop solution', function() {

	it('Finds a match given the input of 1,000', function() {
		expect(results).to.be.ok; // truthy
	});

	it('Finds a valid Pythagorean triple', function() {
		var a,
			b,
			c;

		expect(results).to.have.property('a');
		expect(results).to.have.property('b');
		expect(results).to.have.property('b');

		a = results.a;
		b = results.b;
		c = results.c;
		expect(Math.pow(a, 2) + Math.pow(b, 2)).to.eql(Math.pow(c, 2));
		expect(a + b + c).to.eql(1000);
	});

});