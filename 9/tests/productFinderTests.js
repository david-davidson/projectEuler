'use strict';
/*jshint expr:true */

var chai = require('chai');
var	expect = chai.expect;
var	findProductOfValues = require('../lib/findProductOfValues');
var	results = findProductOfValues({
	a: 1,
	b: 2,
	c: 3
});

describe('The helper function (that calculates the product of an object\'s values)', function() {

	it('Accepts an object and returns a number', function() {
		expect(results).to.be.ok;
		expect(typeof results).to.eql('number');
	});

	it('Returns the *right* number', function() {
		expect(results).to.eql(6);
	});

});