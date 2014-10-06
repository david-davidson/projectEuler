'use strict';
/*jshint expr:true */

var chai = require('chai');
var	expect = chai.expect;
var	better = require('../lib/better');
var	results = better(1000);

describe('The double-for-loop solution', function() {

	it('Finds a match given the input of 1,000', function() {
		expect(results).to.be.ok; // truthy
	});

	it('Finds a valid Pythagorean triple', function() {
		expect(results).to.have.property('a');
		expect(results).to.have.property('b');
		expect(results).to.have.property('b');

		var a = results.a;
		var b = results.b;
		var c = results.c;
		expect(Math.pow(a, 2) + Math.pow(b, 2)).to.eql(Math.pow(c, 2));
		expect(a + b + c).to.eql(1000);
	});

});