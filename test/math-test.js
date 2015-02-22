var square = require('../lib/math');
var should = require('should');


describe('Square func', function(){
	it('Should square number', function(){
		var number = 2;
		(square(2)).should.equal(4);
		(square(2)).should.not.equal(3);
	});
});